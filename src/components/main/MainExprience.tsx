import React from "react";

export default function MainExprience() {
  return (
    <section className="py-[150px] w-full relative">
      <div id="container" className="max-w-[1330px] mx-auto my-0 relative px-5">
        <div className="relative mb-[20px] text-[21px] font-light">
          머무르며 즐기는 다채로운 경험
          <div className="absolute block -top-[15px] w-[44px] h-[3px] bg-black"></div>
        </div>
        <div className="w-full flex">
          <div className="w-49 relative bg-dog-bg pb-1/2 bg-center bg-no-repeat bg-cover">
            <div className="absolute -bottom-12 right-1">#반려동물</div>
          </div>
          <div className="w-49">
            <div className="flex">
              <div className="w-1/2 relative bg-read-book-bg pb-1/2 bg-center bg-no-repeat bg-cover mx-4">
                <span className="absolute right-0 -top-10">#독서</span>
              </div>
              <div className="w-1/2 relative bg-fire-look-bg pb-1/2 bg-center bg-no-repeat bg-cover">
                <span className="absolute right-0 -top-10"> #불멍</span>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-1/2 relative bg-drink-bg pb-1/2 bg-center bg-no-repeat bg-cover mx-4">
                <span className="absolute right-1 -bottom-12">#음료</span>
              </div>
              <div className="w-1/2 relative bg-outdoor-bg pb-1/2 bg-center bg-no-repeat bg-cover">
                <span className="absolute right-1 -bottom-12">#아웃도어</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
