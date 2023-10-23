import React from "react";
import TitleBanner from "./components/TitleBanner";
import TravelList from "./components/TravelList";
import { TravelData } from "@/constans/Travel";

export default function MainTravel() {
  return (
    <section>
      <div
        id="container"
        className="max-w-[1330px] p-5 mt-[200px] relative mx-auto">
        <div className="">
          <TitleBanner text="T R A V E L" />
          <TravelList data={TravelData} />
        </div>
      </div>
    </section>
  );
}
