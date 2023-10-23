import React from "react";

interface Item {
  image: string;
  name: string;
  region: string;
  evnet: string;
  date: string;
}

interface ItemListProps {
  data: Item[];
}

export default function EventList({ data }: ItemListProps) {
  return (
    <>
      <ul className="list-none flex justify-between ">
        {data.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="w-full h-[250px] bg-center bg-cover min-w-[400px] relative"
              style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute right-0 bg-zinc-600 h-[28px]  flex items-center  ">
                <span className="text-center text-[10px] text-white ">
                  {item.date}
                </span>
              </div>
            </div>
            <p className="text-center mt-8 text-2xl ">{item.name}</p>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-sm text-stone-600">{item.region}</p>
              <p className="text-sm text-stone-600">{item.evnet}</p>
            </div>
            <div className="flex items-center justify-center">
              <a className="font-abel text-sm mt-8 border-b border-black">
                read more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
