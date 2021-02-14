import React, { useEffect, useState } from "react";
import "./EntityHeading.css";

function EntityHeading({ title, runtime, releaseDate, params }) {
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
      <i className="fas fa-film"></i>
      <h1>{title}</h1>
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
    </div>
  );
}

export default EntityHeading;
