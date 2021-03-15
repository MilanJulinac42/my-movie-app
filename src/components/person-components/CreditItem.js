import React from "react";
import "./CreditItem.css";
import { Link } from "react-router-dom";

function CreditItem({ year, mediaName, character, id, mediaType }) {
  return (
    <Link className="credit-link" to={`/EntityPage/${mediaType}/${id}`}>
      <div className="credit-item">
        <div className="credit-flex">
          <span className="circle"></span>
          <p className="year">{year}</p>
          <p>{mediaName}</p>
        </div>
        {character ? (
          <div className="credit-flex">
            <p>as</p>
            <p>{character}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}

export default CreditItem;
