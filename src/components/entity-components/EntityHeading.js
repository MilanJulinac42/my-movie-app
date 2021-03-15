import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "../SearchPage";
import "./EntityHeading.css";
import { Link } from "react-router-dom";

function EntityHeading({ title, runtime, releaseDate, params, name }) {
  const [lastAirDateOrDuration, setlastAirDateOrDuration] = useState("");

  const convertMinutes = () => {
    if (params.entityType === "movie") {
      let minutes = runtime % 60;
      let hours = ~~(runtime / 60);
      console.log(minutes);
      console.log(hours);
      setlastAirDateOrDuration(hours + "h" + minutes + "m");
    } else {
      setlastAirDateOrDuration(runtime);
    }
  };

  useEffect(() => {
    convertMinutes();
  });

  return (
    <div className="heading">
      <div className="flex">
        <Link to={"/"}>
          <i className="fas fa-film"></i>
        </Link>
        <h1>{title ? title : name}</h1>
      </div>
      {title ? (
        <div className="additional-info ">
          <i className="far fa-calendar-alt"></i>
          <p>{releaseDate}</p>
          <i className="fas fa-minus"></i>
          <i
            className={
              params.entityType === "movie"
                ? "far fa-clock"
                : "far fa-calendar-alt"
            }
          ></i>
          <p>{lastAirDateOrDuration}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EntityHeading;
