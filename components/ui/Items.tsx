import { itemProps } from "./listItem.interface";
export const Items = ({ data }: itemProps) => {
  return (
    <li className="itemCard h-12 bg-slate-400 mb-2">
      <p>#{data.uniqueId}</p>
      <p>{data.created}</p>
      <input
        type="checkbox"
        className="checkbox"
        id={data.uniqueId.toString()}
      />
    </li>
  );
};
