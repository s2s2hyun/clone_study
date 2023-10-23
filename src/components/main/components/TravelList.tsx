import React from "react";

interface Item {
  image: string;
  name: string;
  region: string;
  writer: string;
  description: string;
}

interface ItemListProps {
  data: Item[];
}

export default function TravelList({ data }: ItemListProps) {
  return (
    <>
      <ul className="list-none grid grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="w-full h-[250px] bg-center bg-cover min-w-[400px] relative"
              style={{ backgroundImage: `url(${item.image})` }}>
              <div className="absolute right-0 bg-zinc-600 h-[28px]  flex items-center  "></div>
            </div>
            <p className="text-sm text-stone-600 text-left mt-5">
              {item.region}
            </p>
            <p className="text-left mt-4 text-2xl  ">{item.name}</p>
            <div className="flex flex-col  mt-4">
              <p className="text-sm text-stone-500 font-light">
                {item.description}
              </p>
              <p className="text-sm text-black font-light text-left  mt-5">
                {item.writer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
