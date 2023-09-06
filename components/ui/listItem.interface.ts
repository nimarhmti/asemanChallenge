import { ItemsModel, convertedDataModel } from "@/utils/preprocessing";

export interface Props {
  data: convertedDataModel;
  currentItemHandler: (items: convertedDataModel, checked: boolean) => void;
}

export interface itemProps {
  data: ItemsModel;
}
