import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartBar,
  faDollarSign,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import "./RatingField.css";

function RatingField({ value, type }) {
  const [icon, setIcon] = useState("");
  const [headline, setHeadline] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    console.log(type);
    if (type === "vote") {
      setIcon(faChartLine);
      setHeadline("Rating");
      setColor("yellow");
    } else if (type === "popularity") {
      setIcon(faChartBar);
      setHeadline("Popularity");
      setColor("blue");
    } else if (type === "profit") {
      if (parseInt(value) > 0) {
        setIcon(faDollarSign);
        setColor("green");
      } else {
        setIcon(faDollarSign);
        setColor("green");
      }
      setHeadline("Profit");
    } else {
      setIcon(faTv);
      setHeadline("Seasons and episodes");
      setColor("purple");
    }
  }, []);

  return (
    <div className="rating-field">
      <h3>{headline}</h3>
      <div className="value">
        <FontAwesomeIcon className={`icon ${color}`} icon={icon} />
        <i className="fas fa-long-arrow-alt-right"></i>
        <p>
          {headline === "Profit"
            ? ~~(value / 1000000) + "m"
            : headline === "Popularity"
            ? value
            : value}
        </p>
      </div>
    </div>
  );
}

export default RatingField;
