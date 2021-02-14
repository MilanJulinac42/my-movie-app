import React from "react";
import "./Genre.css";

function Genre({ genres }) {
  function renderGenre() {
    return genres.map((genre, index) => {
      return (
        <h4 className="genre" key={index}>
          {genre.name}
        </h4>
      );
    });
  }

  return <div className="genre-list">{genres ? renderGenre() : "ERROR"}</div>;
}

export default Genre;
