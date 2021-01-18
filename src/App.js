import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Grid from "./components/items-grid/Grid";
import FilterGrid from "./components/filter-grid/FilterGrid";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState("multi");
  const [query, setQuery] = useState("a");
  const [test, setTest] = useState({ testType: "", testId: 0 });

  const fetchItems = async (query) => {
    setIsLoading(true);
    const result = await axios(
      `https://api.themoviedb.org/3/search/${filterType}?api_key=7f7a0b3c0b79252c89960e5523e5a22a&language=en-US&query=${query}&page=1&include_adult=true`
    );
    setItems(result.data);
    setIsLoading(false);
    setQuery(query);
    console.log(result.data);
  };

  useEffect(() => {
    fetchItems(query);
  }, [filterType]);

  return (
    <div className="App">
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
      <Grid items={items} isLoading={isLoading} setTest={setTest} />
    </div>
  );
}

export default App;
