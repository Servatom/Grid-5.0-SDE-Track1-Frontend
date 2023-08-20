"use client";

import { Bot, BrainCircuit, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import Chat from "./Chat";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        !isOpen ? "min-w-[400px]" : "min-w-[800px] max-w-[800px]"
      } transition-all duration-300 drop-shadow-2xl shadow-xl bg-white fixed bottom-0 right-2 rounded-t-md flex flex-col`}
    >
      <div
        className={`flex flex-row items-center cursor-pointer p-4 ${
          isOpen ? "shadow-md" : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex flex-row items-center gap-2">
          {/* <Bot size={30} className="mb-2" /> */}
          <BrainCircuit size={30} className="mb-2" />
          <h1 className="font-medium">Your AI Stylist</h1>
          <div className="relative mb-2 ml-1">
            <div className="h-2 w-2 absolute rounded-full animate-ping bg-pink-500"></div>
            <div className="h-2 w-2 absolute rounded-full bg-pink-500"></div>
          </div>
        </div>
        {!isOpen ? (
          <Maximize2 size={18} className="ml-auto" />
        ) : (
          <Minimize2 size={18} className="ml-auto" />
        )}
      </div>
      <div
        className={`${
          isOpen ? "max-h-[70vh]" : "max-h-0"
        } h-[70vh] overflow-hidden flex transition-all duration-300`}
      >
        <Chat />
      </div>
    </div>
  );
};

export default ChatBot;
