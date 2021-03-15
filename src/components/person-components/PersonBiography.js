import React from "react";
import "./PersonBiography.css";
import PersonCredits from "./PersonCredits";
import PersonDetails from "./PersonDetails";

function PersonBiography({
  profile,
  biography,
  birthday,
  deathday,
  knownFor,
  popularity,
  placeOfBirth,
  gender,
  params,
}) {
  return (
    <div className="poster-biography">
      <div className="img-container">
        <img
          src={`https://image.tmdb.org/t/p/original/${profile}`}
          alt="poster"
        />
        <PersonDetails
          birthday={birthday}
          deathday={deathday}
          knownFor={knownFor}
          popularity={popularity}
          placeOfBirth={placeOfBirth}
          gender={gender}
          params={params}
        />
      </div>
      <div className="biography-section">
        <h3>Biography</h3>
        <p>{biography}</p>
        <div className="credits-flex">
          <PersonCredits params={params} />
        </div>
      </div>
    </div>
  );
}

export default PersonBiography;
