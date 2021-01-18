import React from "react";
import FilterGridItem from "./FilterGridItem";
import "./FilterGrid.css";

function FilterGrid({ onFilterTypeChange }) {
  const types = ["All", "Movie", "TvShow", "Celebrity"];
  return (
    <div className="filter-box">
      {types.map((type, index) => (
        <FilterGridItem
          key={index}
          type={type}
          onFilterTypeChange={onFilterTypeChange}
        />
      ))}
    </div>
  );
}

export default FilterGrid;
