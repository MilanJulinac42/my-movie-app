import axios from "axios";
import React, { useState, useEffect } from "react";

function Trailer({ params }) {
  const [link, setLink] = useState("");

  const fetchLink = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/${params.entityType}/${params.id}/videos?api_key=7f7a0b3c0b79252c89960e5523e5a22a&language=en-US`
    );

    for (let video of result.data.results) {
      if (video.type === "Trailer") {
        console.log(video.key);
        setLink(video.key);
        break;
      }
    }
  };

  useEffect(() => {
    console.log(params);
    fetchLink();
  }, []);

  return (
    <>
      <iframe
        width="1020"
        height="573.75"
        src={`https://www.youtube.com/embed/${link}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default Trailer;
