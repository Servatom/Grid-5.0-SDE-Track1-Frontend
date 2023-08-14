import NavBar from "@/components/NavBar";
import Image from "next/image";
import banner from "@/assets/banner.png";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Timer />
      <Image src={banner} alt="banner" className="p-8 pt-0" />
    </div>
  );
}
