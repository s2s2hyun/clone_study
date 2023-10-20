import React from "react";

export default function MainDividerLine() {
  return (
    <section>
      <div className="w-full h-[350px]  bg-black bg-middle-bg bg-no-repeat bg-center bg-cover flex flex-col  justify-center items-center text-center">
        <span className="text-white">
          <p>BRAND STORY</p>
        </span>
        <br />
        <br />
        <span className="text-white">
          <p>스테이, 공간을 넘어선 브랜드 가치</p>
        </span>
      </div>
      <div className="w-full relative">
        <div className="max-w-[1330px] px-[20px] relative mx-auto my-0">
          <div className="absolute top-0 left-[20px] ">F E A T U R E D</div>
          <div className="h-[540px] float-right "></div>
        </div>
      </div>
    </section>
  );
}
