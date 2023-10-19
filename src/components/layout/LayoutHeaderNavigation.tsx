import React from "react";

export const LayoutHeaderNavigation = () => {
  return (
    <header>
      <section className="h-20 flex justify-center items-center">
        <nav className="flex space-x-4">
          <p>로고</p>
          <div className="flex">
            <div>어디로 떠날까요?</div>
            <div>언제 떠날까요?</div>
          </div>
          <div className="flex">
            <a>FIND STAY</a>
            <a>PROMOTION</a>
            <a>JOURNAL</a>
            <a>PRE-ORDER</a>
            <div></div>
            <div>
              <a>LOGIN</a>
              <a>KO</a>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};
