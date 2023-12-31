import Image from "next/image";
import FirstImg from "../../public/assets/houseimg/147586a9404de611673368d935d8f643aa719625.webp";
import HouseTextImg from "../../public/assets/textImg/d7eb664f8cd1a5e2ad2240f4e80e6c89a9a23ac9.jpg";
import MainListSection from "@/components/main/MainListSection";
import MainDividerLine from "@/components/main/MainDividerLine";
import MainEventSection from "@/components/main/MainEventSection";
import MainMagazineSecsction from "@/components/main/MainMagazineSecsction";
import MainTravel from "@/components/main/MainTravel";
import MarkePolio from "@/components/main/MarkePolio";
import MainExprience from "@/components/main/MainExprience";
export default function Home() {
  return (
    <main className="">
      <section className="w-full flex flex-col px-12">
        <div className="relative">
          <Image src={FirstImg} alt="${house-img}" className="w-full" />
          <div className="absolute w-[320px] h-[320px]  bg-white top-1/2  right-[70px] -mt-[150px] py-[30px] items-center justify-center text-center">
            <p>
              <Image
                src={HouseTextImg}
                alt="house_text_img"
                className="w-[200px] h-[60px]"
              />
            </p>
            <p className="mt-[25px] text-base ">
              가장 강력한 할인, <br />
              가장 빠르게 떠나는 여행
            </p>
            <p className="mt-[30px] mb-[25px] text-xs text-black font-bold  tracking-wide5 font-abel">
              PROMOTION
            </p>
            <p className="text-[12px] border-b-[2px] border-black font-abel">
              read more
            </p>
          </div>
        </div>
        <MainListSection />
      </section>
      <MainDividerLine />
      <MainEventSection />
      <MainMagazineSecsction />
      <MainTravel />
      <MarkePolio />
      <MainExprience />
    </main>
  );
}
