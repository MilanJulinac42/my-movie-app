import React, { useState, useEffect } from "react";
import axios from "axios";
import myInitValues from "../../initValues";
import "./PersonCredits.css";
import CreditItem from "./CreditItem";

function PersonCredits({ params }) {
  const [credits, setCredits] = useState([]);

  const fetchCredits = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/${params.entityType}/${params.id}/combined_credits?api_key=${myInitValues.API_KEY}&language=${myInitValues.LANGUAGE}`
    );
    setCredits(result.data.cast);
    console.log(credits);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  const getUniqueYears = () => {
    let years = [];
    credits.forEach((element) => {
      if (element.release_date) {
        years.push(element.release_date.substring(0, 4));
      } else if (element.first_air_date) {
        years.push(element.first_air_date.substring(0, 4));
      } else {
        console.log("error");
      }
    });
    let unique = years.filter((v, i, a) => a.indexOf(v) === i);
    unique.sort();
    return unique.reverse();
  };

  const renderCredits = () => {
    let unique = getUniqueYears();
    console.log(unique);
    return unique.map((year, index) => {
      return (
        <div key={index} className="year-box">
          <h2>{year}</h2>
          {credits.map((el, index) => {
            if (el.first_air_date) {
              if (el.first_air_date.substring(0, 4) === year)
                return (
                  <CreditItem
                    key={index}
                    id={el.id}
                    year={el.first_air_date}
                    mediaName={el.name}
                    character={el.character}
                    mediaType={el.media_type}
                  />
                );
            } else if (el.release_date) {
              if (el.release_date.substring(0, 4) === year) {
                return (
                  <CreditItem
                    key={index}
                    id={el.id}
                    year={el.release_date}
                    mediaName={el.original_title}
                    character={el.character}
                    mediaType={el.media_type}
                  />
                );
              }
            } else {
              return;
            }
          })}
        </div>
      );
    });
  };

  return (
    <>
      <h2>Credits</h2>
      <ul>{renderCredits()}</ul>
    </>
  );
}

export default PersonCredits;
