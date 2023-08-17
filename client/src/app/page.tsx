import NavBar from "@/components/NavBar";
import Image from "next/image";
import banner from "@/assets/banner.png";
import Timer from "@/components/Timer";
import ChatBot from "@/components/ChatBot/ChatBot";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Timer />
      <Image src={banner} alt="banner" className="p-8 pt-0" />
      <ChatBot />
    </div>
  );
}
