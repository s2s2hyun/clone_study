import React from "react";
import TitleBanner from "./components/TitleBanner";
import { EventData } from "@/constans/Event";
import EventList from "./components/EventList";

export default function MainEventSection() {
  return (
    <section>
      <div
        id="container"
        className="max-w-[1330px] p-5 mt-[200px] relative mx-auto">
        <div className="">
          <TitleBanner text="E V E N T" />
          <EventList data={EventData} />
        </div>
      </div>
    </section>
  );
}
