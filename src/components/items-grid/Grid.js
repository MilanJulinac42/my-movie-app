import React from "react";
import "./Grid.css";
import GridItem from "./GridItem";

function Grid({ items, isLoading, setTest }) {
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <div className="grid-items">
      {items.results.map((item, index) => (
        <GridItem key={item.id} item={item} index={index} setTest={setTest} />
      ))}
    </div>
  );
}

export default Grid;
