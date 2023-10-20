import React from "react";
import Image from "next/image";
import ThinRightArrowImg from "../../../../public/assets/icon/thin-right-arrow.svg";

interface TitleBannerProps {
  text: string;
}

export default function TitleBanner({ text }: TitleBannerProps) {
  return (
    <div className="text-center font-light relative flex justify-between">
      <div />
      <p className="tracking-widest mb-14">{text}</p>
      <a className="flex items-center mb-14">
        전체보기 <Image src={ThinRightArrowImg} alt="arrow-right" />
      </a>
    </div>
  );
}
