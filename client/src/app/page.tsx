import Image from "next/image";
import p1 from "@/assets/products/p1.png";
import p2 from "@/assets/products/p2.png";
import p3 from "@/assets/products/p3.png";
import p4 from "@/assets/products/p4.png";
import p5 from "@/assets/products/p5.png";
import p6 from "@/assets/products/p6.png";
import banner from "@/assets/products/banner.png";
import banner2 from "@/assets/products/banner2-2.png";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <div>
      <Timer />
      <Image src={banner} alt="banner" className="p-8 pt-0 w-full" />
      <div className="flex flex-row w-full px-8 pb-4 gap-16">
        <h1 className="text-3xl font-semibold w-1/2">Latest Trends</h1>
        <h1 className="text-3xl font-semibold w-1/2">Accessories</h1>
      </div>
      <div className="flex flex-row gap-16 justify-between w-full px-8 pb-8">
        <div className="grid grid-cols-2 w-1/2 gap-6">
          <Image src={p1} alt="p1" />
          <Image src={p2} alt="p2" />
          <Image src={p3} alt="p3" />
          <Image src={p4} alt="p4" />
        </div>
        <div className="grid grid-cols-2 gap-8 w-1/2">
          <Image src={p5} alt="p5" className="h-min" />
          <Image src={p6} alt="p6" className="h-min" />
          <Image
            src={banner2}
            alt="banner2"
            className="col-span-2 h-min w-full border border-purple-400"
          />
        </div>
      </div>
    </div>
  );
}
