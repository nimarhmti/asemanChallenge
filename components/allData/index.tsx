import React from "react";
import { ListData } from "../ui/ListingData";

export const AllData = () => {
  return (
    <div className="card flex flex-col items-center">
      <h1 className="headerTitle mb-3">All Data</h1>
      <button className="btn self-end mb-3">Add</button>
      <ListData />
    </div>
  );
};
