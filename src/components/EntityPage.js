import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EntityHeading from "./entity-components/EntityHeading";
import myInitValues from "../initValues";
import "./EntityPage.css";
import EntityDetails from "./entity-components/EntityDetails";
import PersonBiography from "./person-components/PersonBiography";
import PersonDetails from "./person-components/PersonDetails";
import PersonCredits from "./person-components/PersonCredits";

function EntityPage() {
  const [details, setDetails] = useState([]);
  const params = useParams();

  const fetchDetails = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/${params.entityType}/${params.id}?api_key=${myInitValues.API_KEY}&language=${myInitValues.LANGUAGE}`
    );
    console.log(result.data);
    setDetails(result.data);
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);

  const render = () => {
    if (params.entityType != "person") {
      return (
        <>
          <EntityHeading
            title={
              details.original_title ? details.original_title : details.name
            }
            runtime={details.runtime ? details.runtime : details.last_air_date}
            releaseDate={
              details.release_date
                ? details.release_date
                : details.first_air_date
            }
            params={params}
          />
          <EntityDetails
            poster={details.poster_path}
            genres={details.genres}
            overview={details.overview}
            tagline={details.tagline}
            params={params}
            vote={details.vote_average}
            revenueOrSeasons={
              details.revenue ? details.revenue : details.number_of_seasons
            }
            budgetOrEpisodes={
              details.budget ? details.budget : details.number_of_episodes
            }
            popularity={details.popularity}
          />
        </>
      );
    } else {
      return (
        <>
          <PersonBiography
            profile={details.profile_path}
            name={details.name}
            biography={details.biography}
          />
          <PersonDetails
            birthday={details.birthday}
            deathday={details.deathday}
            knownFor={details.known_for_department}
            popularity={details.popularity}
            placeOfBirth={details.place_of_birth}
            gender={details.gender}
          />
          <PersonCredits params={params} />
        </>
      );
    }
  };

  return <div className="container">{render()}</div>;
}

export default EntityPage;
