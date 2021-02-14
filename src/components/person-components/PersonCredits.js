import React, { useState, useEffect } from "react";
import axios from "axios";
import myInitValues from "../../initValues";

function PersonCredits({ params }) {
  const [credits, setCredits] = useState([]);
  const [years, setYears] = useState([]);

  const fetchCredits = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/${params.entityType}/${params.id}/combined_credits?api_key=${myInitValues.API_KEY}&language=${myInitValues.LANGUAGE}`
    );
    setCredits(result.data.cast);
  };

  const yearsFunction = () => {
    credits.map((el) => {
      setYears((years) => [...years, el.release_date]);
    });
  };

  useEffect(() => {
    fetchCredits();
    yearsFunction();
  }, []);

  const renderCredits = () => {
    // return credits.map((el, index) => {
    //   try {
    //     return <li key={index}>{el.release_date.substring(0, 4)}</li>;
    //   } catch (error) {
    //     console.log("err");
    //   }
    // });
  };

  return (
    <div>
      <h2>Credits</h2>
      <ul>{renderCredits()}</ul>
      {console.log(years)}
    </div>
  );
}

export default PersonCredits;
