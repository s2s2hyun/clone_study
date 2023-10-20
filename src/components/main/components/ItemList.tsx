import React from "react";

interface Item {
  image: string;
  name: string;
  region: string;
  price: string;
}

interface ItemListProps {
  data: Item[];
}

export default function ItemList({ data }: ItemListProps) {
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
                  EXCLUSIVE
                </span>
              </div>
            </div>
            <p className="text-center mt-8 text-2xl ">{item.name}</p>
            <div className="flex justify-center mt-4">
              <p className="text-sm text-stone-600">{item.region}</p>
              <p className="text-sm text-stone-600">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-20 items-center">
        <p className="font-light text-sm ">1/12</p>
        <div className="flex ml-4">
          <p className="mr-4">←</p>
          <p>→</p>
        </div>
      </div>
    </>
  );
}
