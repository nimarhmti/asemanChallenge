"use client";
import React, { useState } from "react";
import { ListData } from "../ui/ListingData";
import { useGlobalContext } from "@/context/store";
import { convertedDataModel } from "@/utils/preprocessing";
import { dataFormate } from "@/utils/dateFormater";

export const AllData = () => {
  const { data, addItem } = useGlobalContext();
  const [current, setCurrent] = useState<convertedDataModel[] | []>([]);
  const currentItemHandler = (items: convertedDataModel, checked: boolean) => {
    if (checked) {
      setCurrent((pre) => [...pre, items]);
    } else {
      const removedItem = current.filter((ele) => ele.id != items.id);
      setCurrent(removedItem);
    }
  };
  const addToSelectedItem = () => {
    addItem(current);
    setCurrent([]);
  };
  return (
    <div className="card flex flex-col items-center">
      <h1 className="headerTitle mb-3">All Data</h1>
      <button className="btn self-end mb-3" onClick={addToSelectedItem}>
        Add
      </button>
      {data.map((item) => (
        <ListData
          data={item}
          key={item.id}
          currentItemHandler={currentItemHandler}
        />
      ))}
    </div>
  );
};
