import React from "react";
import ThinRightArrowImg from "../../../public/assets/icon/thin-right-arrow.svg";
import Image from "next/image";
import { domesticData } from "@/constans/DomesticList";

export default function MainListSection() {
  return (
    <section>
      <div className="mt-[110px] mx-auto mb-[200px] max-w-[1330px]">
        <div className="text-center font-light relative flex justify-between">
          <div />
          <p className="tracking-widest mb-14">
            오 직 스 테 이 폴 리 오 에 서 만
          </p>
          <a className="flex items-center">
            전체보기 <Image src={ThinRightArrowImg} alt="arrow-right" />
          </a>
        </div>
        <ul className="list-none flex justify-between ">
          {domesticData.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <div
                className="w-full h-[250px] bg-center bg-cover min-w-[400px] relative"
                style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute right-0 bg-zinc-600 h-[28px]  flex items-center  ">
                  <span className="text-center text-[20px] text-white ">
                    EXCLUSIVE
                  </span>
                </div>
              </div>
              <p className="text-center mt-8 text-2xl ">{item.name}</p>
              <div className="flex justify-center mt-4">
                <p className="text-sm text-stone-600">{item.region}</p>
                <p className="text-sm text-stone-600">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex">
          <p>1/12</p>
          <div></div>
        </div>
      </div>
    </section>
  );
}
