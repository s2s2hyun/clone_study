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
      <div className="w-full relative py-[110px] bg-gray-100 h-[800px] ">
        <div className="max-w-[1330px] px-[20px] relative mx-auto my-0 ">
          <div className="absolute top-0 left-[20px] font-abel ">
            F E A T U R E D
          </div>
          <div className="absolute top-[80px] left-[20px] text-2xl ">
            <p>
              루틴을 만드는 여행
              <br />
              with 브레빌
            </p>
            <p>나의 리추얼 메이커</p>
            <p className="mt-5 text-sm font-light">
              11월 - 12월 투숙 시 <br />
              amie 로제 와인 1병 제공
            </p>
          </div>
          <div className="w-[70%] h-[540px] float-right bg-middleTwo-bg bg-no-repeat bg-center bg-cover "></div>
        </div>
      </div>
    </section>
  );
}
