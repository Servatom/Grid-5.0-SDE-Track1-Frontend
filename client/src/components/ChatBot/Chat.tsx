"use client";
import { axiosPortkey } from "@/axios";
import AuthContext from "@/store/auth-context";
import { Mic, SendHorizontal } from "lucide-react";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import SuggestedProduct from "./SuggestedProduct";
import { ISUggestedProduct } from "@/types";

let speech: any;
if (typeof window !== "undefined" && (window as any).webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = (window as any).webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}

const Chat: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isListening, setIsListening] = useState(false);
  const [convoId, setConvoId] = useState<string>("");
  const [suggestedProducts, setSuggestedProducts] = useState<
    ISUggestedProduct[]
  >([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const listen = () => {
    if (isListening) {
      speech.stop();
    } else {
      speech.start();
    }
    setIsListening(!isListening);
  };

  const initConvo = async () => {
    const convo = await axiosPortkey
      .get("/init", {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
      .then((res) => res.data);
    setConvoId(convo.conversation_id);
  };

  useEffect(() => {
    if (!authCtx.isLoggedIn) return;

    initConvo();
  }, []);

  useEffect(() => {
    //handle if the browser does not support the Speech API
    if (!speech) {
      return;
    }
    speech.onresult = (event: any) => {
      setNewMessage(event.results[event.results.length - 1][0].transcript);
      speech.stop();
      setIsListening(false);
    };
  }, [isListening]);

  const [chat, setChat] = useState<
    {
      message: string;
      from: "user" | "bot";
    }[]
  >([
    {
      message: "Hi, I'm your personal stylist. What can I do for you?",
      from: "bot",
    },
    // {
    //   message: "I need an outfit for a party",
    //   from: "user",
    // },
    // {
    //   message: "Sure, I can help you with that. What's the occasion?",
    //   from: "bot",
    // },
    // {
    //   message: "It's a birthday party",
    //   from: "user",
    // },
    // {
    //   message: "Awesome! What's your budget?",
    //   from: "bot",
    // },
    // {
    //   message: "My budget is $100",
    //   from: "user",
    // },
    // {
    //   message: "That's a good budget. Do you have any color preferences?",
    //   from: "bot",
    // },
    // {
    //   message: "I like blue",
    //   from: "user",
    // },
    // {
    //   message: "Great! I'll get back to you soon",
    //   from: "bot",
    // },
  ]);

  const onSubmitChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newResp = await axiosPortkey
      .post(
        `/talk/${convoId}`,
        {
          conversation: [{ role: "user", content: newMessage }],
        },
        {
          headers: {
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      )
      .then((res) => res.data);

    if (newResp.bot_reply_type === "text") {
      if (suggestedProducts.length > 0) {
        setSuggestedProducts([]);
      }
      setChat((prev) => {
        return [
          ...prev,
          {
            from: "user",
            message: newMessage,
          },
          {
            from: "bot",
            message: newResp.bot_reply,
          },
        ];
      });
      setNewMessage("");
    } else if (newResp.bot_reply_type === "search_results") {
      setNewMessage("");
      setSuggestedProducts(newResp.search_results);
      console.log(newResp.search_results);
      setChat((prev) => {
        return [
          ...prev,
          {
            from: "user",
            message: newMessage,
          },
          {
            from: "bot",
            message: "Sure! Found some relevant products:",
          },
        ];
      });
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight + 100,
      behavior: "smooth",
    });
  }, [chat]);

  return (
    <div className="flex flex-col justify-end h-full w-full p-4">
      <div
        className="flex flex-col mt-auto overflow-y-scroll pb-4 h-full w-full"
        ref={chatRef}
      >
        {chat.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${
              message.from === "bot" ? "items-start" : "items-end"
            }`}
          >
            <div
              className={`flex flex-row items-center gap-4 bg-gray-100 p-2 rounded-lg ${
                message.from === "bot" ? "rounded-bl-none" : " rounded-br-none"
              }`}
            >
              <p className="text-sm">{message.message}</p>
            </div>
            <p className="text-[10px] text-gray-400">
              {message.from === "bot" ? "Stylist" : "You"}
            </p>
          </div>
        ))}
        {suggestedProducts.length > 0 && (
          <div className="flex flex-row gap-3 h-max overflow-x-scroll">
            {suggestedProducts.map((product, index) => (
              <SuggestedProduct key={index} {...product} />
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={onSubmitChat}
        className="flex flex-row items-center gap-4 bg-gray-100 p-2 rounded-lg"
      >
        <div
          className={`p-2 rounded-full bg-gray-400 bg-opacity-20 cursor-pointer ${
            isListening ? "animate-pulse" : "animate-none"
          }`}
        >
          <Mic
            className={`${
              isListening ? "opacity-80 text-pink-500" : "opacity-50"
            } `}
            onClick={listen}
          />
        </div>
        <input
          className="outline-none w-full bg-transparent disabled:cursor-not-allowed"
          type="text"
          placeholder={
            !authCtx.isLoggedIn
              ? "Please login to chat with the stylist"
              : isListening
              ? "Listening..."
              : "Ask me for an outfit suggestion..."
          }
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          disabled={!authCtx.isLoggedIn}
        />
        <button type="submit">
          <SendHorizontal
            className={`${
              newMessage.length > 0 ? "opacity-75" : "opacity-30"
            } `}
          />
        </button>
      </form>
    </div>
  );
};

export default Chat;
