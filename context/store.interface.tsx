import { convertedDataModel } from "@/utils/preprocessing";
export type dataType = convertedDataModel[] | [];

export interface contextProps {
  data: dataType;
  selectedData: dataType;
  addItem: (item: any) => void;
  removeItem: (item: any) => void;
}
