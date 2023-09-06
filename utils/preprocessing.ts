import { dataModel } from "@/data/data.interface";
import { dataFormate } from "./dateFormater";
export interface ItemsModel {
  title: string;
  created: string;
  uniqueId: number;
}
export interface convertedDataModel {
  id: string;
  amount: number;
  items: ItemsModel[];
}
///
export const preProcessor = (data: dataModel[]) => {
  //get first ID Label and store in variable bellow
  const firstItem = data[0];
  const outPut = [];
  const initialAmount = 1;
  //first of all add new item to the outPut List
  let newItem: convertedDataModel = {
    id: firstItem.id,
    amount: initialAmount,
    items: [
      {
        title: firstItem.title,
        uniqueId: firstItem.uniqueId,
        created: dataFormate(firstItem.created),
      },
    ],
  };
  outPut.push(newItem);
  //implement a loop to check any item
  for (let item = 1; item < data.length; item++) {
    //get existingItem in the dataList
    const existingItem = outPut.find((ele) => ele.id == data[item].id);
    const currentDataItem = data[item];
    //checks the existing item in the dataList
    if (existingItem) {
      //find index for manipulation outputLst
      const index = outPut.findIndex((ele) => ele.id == existingItem.id);
      const currentOutputItem = outPut[index];
      //update existing item and store
      currentOutputItem.amount++;
      currentOutputItem.items.push({
        uniqueId: currentDataItem.uniqueId,
        title: currentDataItem.title,
        created: dataFormate(currentDataItem.created),
      });
    } else {
      // add new item
      newItem = {
        id: currentDataItem.id,
        amount: initialAmount,
        items: [
          {
            uniqueId: currentDataItem.uniqueId,
            title: currentDataItem.title,
            created: dataFormate(currentDataItem.created),
          },
        ],
      };
      outPut.push(newItem);
    }
  }
  return outPut;
};
