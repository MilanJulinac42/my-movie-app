import React from "react";
import Genre from "../movie-components/Genre";
import OverwievBiography from "../movie-components/OverwievBiography";
import RatingField from "../movie-components/RatingField";
import Trailer from "../movie-components/Trailer";
import "./EntityDetails.css";

function EntityDetails({
  poster,
  genres,
  params,
  overview,
  tagline,
  popularity,
  budgetOrEpisodes,
  revenueOrSeasons,
  vote,
}) {
  return (
    <div className="trailer-info-section">
      <div className="poster-genre">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="poster"
          className="poster"
        />
        <Genre genres={genres} />
        <div className="absolute-circle"></div>
      </div>
      <div className="trailer-description ">
        <div className="triangle-bottomright"></div>
        <div className="absolute-circle-first"></div>
        <div className="absolute-circle-second"></div>
        <Trailer params={params} />
        <OverwievBiography overview={overview} tagline={tagline} />
      </div>
      <div className="rating-section">
        <RatingField value={vote} type={"vote"} />
        <RatingField value={popularity} type={"popularity"} />
        <RatingField
          value={
            params.entityType === "movie"
              ? revenueOrSeasons - budgetOrEpisodes
              : revenueOrSeasons + "s-" + budgetOrEpisodes + "e"
          }
          type={params.entityType === "movie" ? "profit" : "series"}
        />
        <div class="square">
          <i class="fas fa-film"></i>
        </div>
      </div>
    </div>
  );
}

export default EntityDetails;
