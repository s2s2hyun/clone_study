import React from "react";
import ThinRightArrowImg from "../../../public/assets/icon/thin-right-arrow.svg";
import Image from "next/image";
import { domesticData } from "@/constans/DomesticList";
import { InternationalData } from "@/constans/InternationalList";

import TitleBanner from "./components/TitleBanner";
import ItemList from "./components/ItemList";

export default function MainListSection() {
  return (
    <section>
      <div className="mt-[110px] mx-auto mb-[200px] max-w-[1330px]">
        <TitleBanner text="오 직 스 테 이 폴 리 오 에 서 만" />
        <ItemList data={domesticData} />
        <div className="mt-[110px] mx-auto mb-[200px]">
          <TitleBanner text="해 외 여 행 도 스 테 이 폴 리 오 에 서" />
          <ItemList data={InternationalData} />
        </div>
      </div>
    </section>
  );
}
