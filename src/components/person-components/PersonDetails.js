import React from "react";
import "./PersonDetails.css";

function PersonDetails({
  birthday,
  deathday,
  knownFor,
  popularity,
  placeOfBirth,
  gender,
}) {
  return (
    <div className="person-details">
      <h3>Personal info</h3>
      <ul>
        <li>
          <h5>Gender</h5>
          <p>{gender === 1 ? "Female" : "Male"}</p>
        </li>
        <li>
          <h5>Place of birth</h5>
          <p>{placeOfBirth}</p>
        </li>
        <li>
          <h5>Birthday</h5>
          <p>{birthday}</p>
        </li>
        <li>
          <h5>{deathday ? "Deathday" : ""}</h5>
          <p>{deathday}</p>
        </li>
        <li>
          <h5>Known for</h5>
          <p>{knownFor}</p>
        </li>
        <li>
          <h5>Popularity</h5>
          <p>{popularity}</p>
        </li>
      </ul>
    </div>
  );
}

export default PersonDetails;
