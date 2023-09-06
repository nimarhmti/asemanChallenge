"use client";
import { useGlobalContext } from "@/context/store";
import React, { useState } from "react";
import { ListData } from "../ui/ListingData";
import { convertedDataModel } from "@/utils/preprocessing";

export const SelectedData = () => {
  const { selectedData, removeItem } = useGlobalContext();
  const [current, setCurrent] = useState<convertedDataModel[] | []>([]);
  const currentItemHandler = (items: convertedDataModel, checked: boolean) => {
    if (checked) {
      setCurrent((pre) => [...pre, items]);
    } else {
      const removedItem = current.filter((ele) => ele.id != items.id);
      setCurrent(removedItem);
    }
  };

  const removeFromSelectedItem = () => {
    removeItem(current);
    setCurrent([]);
  };
  return (
    <div className="card flex flex-col items-center">
      <h1 className="headerTitle mb-3">selected Data</h1>
      <button className="btn self-end mb-3" onClick={removeFromSelectedItem}>
        delete
      </button>
      {selectedData.map((item) => (
        <ListData
          data={item}
          key={item.id}
          currentItemHandler={currentItemHandler}
        />
      ))}
    </div>
  );
};
