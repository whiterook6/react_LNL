import React, { useState } from "react";
import { FaStar, FaUsers } from "react-icons/fa";
import { getImageURL } from "../service";

export const Show = (props) => {
  const show = props.show;
  const [isLiked, setIsLiked] = useState(false);

  const toggleIsLiked = () => {
    setIsLiked(!isLiked);
  }

  return (
    <div className="box" style={{ position: "relative" }} key={show.id}>
      <div style={{
        borderRadius: "6px",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.3,
        background: `url(${getImageURL(show.backdrop_path)}) center center no-repeat`,
        backgroundSize: "cover"
      }} />
      <div className="stack" style={{position:"relative"}}>
        <h1 className="title is-4">{show.name}</h1>
        <h2 className="subtitle is-4">{show.first_air_date} to {show.last_air_date}</h2>
        <div>{show.overview}</div>
        <div className="row">
          <div>Seasons: {show.number_of_seasons}</div>
          <div>Episodes: {show.number_of_episodes}</div>
        </div>
        <div className="row">
          <div className="tag" onClick={toggleIsLiked}>
            <FaStar style={isLiked ? { color: "orange", marginRight: "0.5rem" } : {marginRight: "0.5rem"}} />
            <span>{show.vote_average}</span>
          </div>
          <div className="tag"><FaUsers style={{ marginRight: "0.5rem" }}/>{Math.round(show.popularity)}</div>
        </div>
      </div>
    </div>
  );
};
