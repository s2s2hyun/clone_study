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
          <div className="absolute top-0 left-[20px] ">F E A T U R E D</div>
          <div className="absolute top-100 left-0 text-2xl ">
            <p>
              루틴을 만드는 여행
              <br />
              with 브레빌
            </p>
            <p>나의 리추얼 메이커</p>
          </div>
          <div className="w-[74%] h-[540px] float-right bg-middleTwo-bg bg-no-repeat bg-center bg-cover "></div>
        </div>
      </div>
    </section>
  );
}
