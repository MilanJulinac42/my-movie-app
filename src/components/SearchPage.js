import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Grid from "./items-grid/Grid";
import FilterGrid from "./filter-grid/FilterGrid";
import myInitValues from "../initValues";
import loading from "../images/loadinggif.gif";

function SearchPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState("multi");
  const [entity, setEntity] = useState({ entityType: "", entityId: 0 });
  const [query, setQuery] = useState("a");

  const fetchItems = async (query) => {
    setIsLoading(true);
    const result = await axios(
      `${myInitValues.API_PATH}${filterType}?api_key=${myInitValues.API_KEY}&language=${myInitValues.LANGUAGE}&query=${query}&page=1&include_adult=${myInitValues.INCLUDE_ADULT}`
    );
    setItems(result.data);
    setIsLoading(false);
    setQuery(query);
    console.log(result.data);
  };

  useEffect(() => {
    fetchItems(query);
    console.log(entity);
  }, [filterType]);

  const initialRenderAndLoading = () => {
    if (!query) {
      return <h1>ENTER MOVIE,PERSON OR TV SHOW</h1>;
    } else {
      if (!isLoading) {
        return <Grid items={items} setEntity={setEntity} />;
      } else {
        return (
          <img style={{ margin: "auto", display: "block" }} src={loading} />
        );
      }
    }
  };

  return (
    <div>
      <header className="App-header">
        <div className="header-content">
          <h1>Welcome...</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <Search getItems={(query) => fetchItems(query)} />
        </div>
        <FilterGrid onFilterTypeChange={setFilterType} />
      </header>
      {initialRenderAndLoading()}
    </div>
  );
}

export default SearchPage;
