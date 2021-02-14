import React from "react";
import "./Grid.css";
import GridItem from "./GridItem";

function Grid({ items, setEntity }) {
  return (
    <div className="grid-items">
      {items.results.map((item, index) => (
        <GridItem
          key={item.id}
          item={item}
          index={index}
          setEntity={setEntity}
        />
      ))}
    </div>
  );
}

export default Grid;
