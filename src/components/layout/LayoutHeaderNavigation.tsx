import React from "react";
import Image from "next/image";
import LogoImg from "../../../public/assets/logo/logo.png";
import WhereIcon from "../../../public/assets/icon/where@3x.png";
import WhenIcon from "../../../public/assets/icon/when@3x.png";
import LoginIcon from "../../../public/assets/icon/ico_login.svg";
import languageIcon from "../../../public/assets/icon/ico-language.svg";

export const LayoutHeaderNavigation = () => {
  return (
    <header>
      <section className="h-20 flex  items-center relative">
        <nav className="w-full flex justify-between px-12 items-center">
          <a className="w-20">
            <Image src={LogoImg} width={86} height={36} alt="logo-button" />
          </a>
          <div className="flex items-center absolute left-1/2 -ml-[160px]">
            <div className="flex items-center">
              <a className="text-base flex">
                <Image
                  src={WhereIcon}
                  width={20}
                  height={20}
                  alt="where-img"
                  className="mr-2"
                />
                어디로 떠날까요?
              </a>
            </div>
            <div className="inline-block w-1 h-[20px] mx-[16px] bg-gray-500 align-middle" />
            <div className="flex items-center  ">
              <a className="text-base flex">
                <Image
                  src={WhenIcon}
                  width={25}
                  height={25}
                  alt="when-img"
                  className="mr-2"
                />
                언제 떠날까요?
              </a>
            </div>
          </div>
          <div className="flex" role="header_nav">
            <ul className="list-none flex  border-r border-gray-300 mr-2.5 pr-4">
              <li className="">
                <a className="text-base font-bold font-lato-bold leading-6 text-black">
                  FIND STAY
                </a>
              </li>

              <li className="ml-[14px]">
                <a className="text-base font-bold font-lato-bold leading-6 text-black">
                  PROMOTION
                </a>
              </li>

              <li className="ml-[14px]">
                <a className="text-base font-bold font-lato-bold leading-6 text-black">
                  JOURNAL
                </a>
              </li>

              <li className="ml-[14px]">
                <a className="text-base font-bold font-lato-bold leading-6 text-black">
                  PRE-ORDER
                </a>
              </li>
            </ul>
            <div role="etc_nav">
              <ul className="list-none flex items-center ">
                <li>
                  <a className="flex text-sm text-gray-500 pl-5 ">
                    <Image
                      src={LoginIcon}
                      width={20}
                      height={20}
                      alt="login_img"
                    />
                    LOGIN
                  </a>
                </li>
                <li>
                  <a className="flex text-sm text-gray-500 pl-5">
                    <Image
                      src={languageIcon}
                      width={20}
                      height={20}
                      alt="language_img"
                    />
                    KO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};
