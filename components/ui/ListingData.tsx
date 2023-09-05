"use client";
import React, { useState } from "react";
import Image from "next/image";
import down from "./down.png";
export const ListData = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <li className="itemCard h-14 bg-slate-100">
        <p className="chip">A</p>
        <span>quantity: 5</span>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" className="checkbox" />
          <Image
            src={down}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen((pre) => !pre)}
            className={
              open ? "rotate-180 transition all" : "rotate-0 transition all"
            }
          />
        </div>
      </li>
      <ul className="mt-2 w-full px-2">
        <li className="itemCard h-12 bg-slate-400">
          <p>#1</p>
          <p>12/3/2022</p>
          <input type="checkbox" className="checkbox" />
        </li>
      </ul>
    </React.Fragment>
  );
};
