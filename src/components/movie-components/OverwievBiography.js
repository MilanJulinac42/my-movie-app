import React from "react";
import "./OverwievBiography.css";

function OverwievBiography({ overview, tagline }) {
  return (
    <>
      <h3 className="overwiev-headline">{tagline ? tagline : "OVERVIEW"}</h3>
      <p className="overwiev-content">{overview}</p>
    </>
  );
}

export default OverwievBiography;
