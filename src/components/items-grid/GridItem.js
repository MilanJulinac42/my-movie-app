import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import myInitValues from "../../initValues";
import { Link } from "react-router-dom";

const Number = styled.h3`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  font-size: 10em;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease-in-out;
`;

const ItemContentScore = styled.p`
  position: absolute;
  top: 15px;
  left: 20px;
  color: white;
  opacity: 0;
  transition: 2s;
  font-weight: 700;
  font-size: 2em;
  text-decoration: underline;
`;

const ItemContentTitle = styled.h2`
  position: relative;
  padding: 20px;
  padding-top: 4em;
  color: white;
  opacity: 0;
  transition: 2s;
  margin-bottom: 0px;
`;

const ItemContentDescription = styled.p`
  position: relative;
  padding: 20px;
  color: white;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  opacity: 0;
  transition: 2s;
  margin-bottom: 20px;
  margin-top: 0px;
`;

const ItemContentReleaseDate = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  color: white;
  opacity: 0;
  transition: 2s;
  display: flex;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
  background-image: url("https://image.tmdb.org/t/p/original${(props) =>
    props.image}");
  background-position: center;
  background-repeat: "no-repeat";
  background-size: cover;
  width: 100%;
  height: 500px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  transition: transform 0.25s ease-in-out;
  cursor: pointer;

  &:hover ${Number} {
    min-width: 3.5em;
    max-width: 3.5em;
    transform: none;
    top: 0px;
    left: 75%;
    font-size: 3em;
    color: white;
  }

  &:hover ${ItemContentTitle} {
    opacity: 1;
  }

  &:hover ${ItemContentDescription} {
    opacity: 1;
  }

  &:hover ${ItemContentReleaseDate} {
    opacity: 1;
  }
  &:hover ${ItemContentScore} {
    opacity: 1;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 0%;
    width: 100%;
    top: 0;
    transition: height 0.5s ease-out;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7));
  }
  &:hover:before {
    height: 100%;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      50px 46px 50px 4px rgba(0, 0, 0, 0);
  }
`;

function GridItem({ item, setEntity }) {
  const [personData, setPersonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [entityType, setEntityType] = useState("");

  const getPersonData = async (id) => {
    setIsLoading(true);
    const result = await axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${myInitValues.API_KEY}&language=${item.LANGUAGE}`
    );
    setPersonData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    if (item.gender) {
      getPersonData(item.id);
    }
    if (item.first_air_date || item.first_air_date === "") {
      setEntityType("tv");
    } else if (item.release_date || item.release_date === "") {
      setEntityType("movie");
    } else {
      setEntityType("person");
    }
  }, []);

  function renderScore() {
    if (item.vote_average || item.vote_average === 0) {
      return (
        <>
          <Number>{item.vote_average ? item.vote_average : "??"}</Number>
          <ItemContentScore>Score:</ItemContentScore>
        </>
      );
    }
  }

  function renderDate() {
    if (item.release_date) {
      return (
        <ItemContentReleaseDate>
          <p>Release date :</p>
          <p>{item.release_date}</p>
        </ItemContentReleaseDate>
      );
    } else if (item.gender && !isLoading) {
      return (
        <ItemContentReleaseDate>
          <p>Born :</p>
          <p>{personData.data.birthday}</p>
        </ItemContentReleaseDate>
      );
    }
  }

  function renderOverwiev() {
    if (item.gender && !isLoading) {
      return (
        <ItemContentDescription>
          {personData.data.biography}
        </ItemContentDescription>
      );
    } else {
      return <ItemContentDescription>{item.overview}</ItemContentDescription>;
    }
  }

  return (
    <Link to={`/EntityPage/${entityType}/${item.id}`}>
      <ItemContainer
        image={item.poster_path ? item.poster_path : item.profile_path}
      >
        {renderScore()}
        <ItemContentTitle>
          {item.title ? item.title : item.name}
        </ItemContentTitle>
        {renderOverwiev()}
        {renderDate()}
      </ItemContainer>
    </Link>
  );
}

export default GridItem;
