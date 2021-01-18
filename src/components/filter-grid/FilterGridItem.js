import React from "react";

function FilterGridItem({ type, onFilterTypeChange }) {
  function handleChangeType(e) {
    e.preventDefault();
    let typeQuery = "";
    if (type === "All") {
      typeQuery = "multi";
    } else if (type === "Movie") {
      typeQuery = "movie";
    } else if (type === "TvShow") {
      typeQuery = "tv";
    } else {
      typeQuery = "person";
    }
    onFilterTypeChange(typeQuery);
  }

  return (
    <div>
      <div>
        <button className="filter-box-button" onClick={handleChangeType}>
          {type}
        </button>
      </div>
    </div>
  );
}

export default FilterGridItem;
