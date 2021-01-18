import React, { useState } from "react";

function Search({ getItems }) {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
  };

  return (
    <section className="search">
      <form action="">
        <div className="flex-horizontal box-shadow">
          <input
            autoFocus
            type="text"
            placeholder="Search for a movie, tv show, person..."
            className="form-control"
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (text === "") {
                alert("You need to enter something");
              } else {
                getItems(text);
              }
            }}
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default Search;
