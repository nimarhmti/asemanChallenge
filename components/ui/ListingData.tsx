"use client";
import React, { useState } from "react";
import Image from "next/image";
import down from "./down.png";
import { Items } from "./Items";
import { Props } from "./listItem.interface";

export const ListData = ({ data, currentItemHandler }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    currentItemHandler(data, checked);
  };
  return (
    <React.Fragment>
      <li className="itemCard h-14 bg-slate-100 mb-2">
        <p className="chip">{data.id}</p>
        <span>quantity: {data.amount}</span>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            className="checkbox"
            onChange={handleChange}
            // onClick={() => setCurrentItem}
          />
          <Image
            src={down}
            alt="icon"
            width={20}
            height={20}
            onClick={() => setOpen((pre) => !pre)}
            className={
              open ? "rotate-180 transition all" : "rotate-0 transition all"
            }
          />
        </div>
      </li>
      <ul className={open ? "hidden subItems" : "subItems"}>
        {data.items.map((item) => (
          <Items data={item} key={item.uniqueId} />
        ))}
      </ul>
    </React.Fragment>
  );
};
