import React from "react";
import "./PersonBiography.css";

function PersonBiography({ profile, name, biography }) {
  return (
    <div className="poster-biography">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile}`}
        alt="poster"
        className="poster"
      />
      <div className="biography-section">
        <h1>{name}</h1>
        <h3>Biography</h3>
        <p>{biography}</p>
      </div>
    </div>
  );
}

export default PersonBiography;
