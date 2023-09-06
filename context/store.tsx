"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { contextProps, dataType } from "./store.interface";
import { convertedDataModel, preProcessor } from "@/utils/preprocessing";
import { StoredData } from "../data/index";
import { Items } from "@/components/ui/Items";

const GlobalContext = createContext<contextProps>({
  data: [],
  selectedData: [],
  addItem: () => null,
  removeItem: () => null,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<dataType>([]);
  const [selectedData, setSelectedData] = useState<dataType>([]);
  useEffect(() => {
    setData(getList);
  }, []);
  const getList = useCallback(() => preProcessor(StoredData), [StoredData]);

  //add new items to data lists
  const addItem = (items: convertedDataModel[]) => {
    setSelectedData((pre) => [...items, ...pre]);
    const removedItems = data.filter((ele) => {
      return !items.includes(ele);
    });
    setData(removedItems);
  };
  //add to submenu function
  
  //remove items form selected list
  const removeItem = (items: convertedDataModel[]) => {
    setData((pre) => [...items, ...pre]);
    const removedItems = selectedData.filter((ele) => {
      return !items.includes(ele);
    });
    setSelectedData(removedItems);
  };
  //remove from submenu function

  const value = { data, addItem, removeItem, selectedData };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
