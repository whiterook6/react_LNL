import React from "react";
import {FaStar} from "react-icons";

export const Episode = (props) => {
  const episode = props.episode;

  return (
    <div>
      <h2>Season {episode.season_number} | Episode {episode.episode_number}</h2>
      <h1>{episode.name}</h1>
      <h2>{episode.air_date}</h2>
      <div>{episode.overview}</div>
      <hr />
      <FaStar />
    </div>
  );
};
