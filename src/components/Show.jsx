import React, { useState } from "react";
import { getImageURL } from "../service";
import { GenreTag } from "./GenreTag";
import { PopularityTag } from "./PopularityTag";
import { StarToggleTag } from "./StarToggleTag";
import { ImageBackground } from "./ImageBackground";

/**
 * Displays an overview of a TV show, including number of episodes, rating, etc. Also allows
 * the user to toggle whether they like the show or not, though this isn't stored in a server
 * anywhere so it's not really persistent.
 */
export const Show = (props) => {
  const show = props.show;
  const [isLiked, setIsLiked] = useState(false);

  const toggleIsLiked = () => {
    setIsLiked(!isLiked);
  }

  return (
    <div className="box" style={{ position: "relative" }} key={show.id}>
      <ImageBackground url={getImageURL(show.backdrop_path)} style={{borderRadius: "6px"}} />
      <div className="stack" style={{position:"relative"}}>
        <h1 className="title is-4">{show.name}</h1>
        <h2 className="subtitle is-4">{show.first_air_date} to {show.last_air_date}</h2>
        <div>{show.overview}</div>
        <div className="row">
          <div>Seasons: {show.number_of_seasons}</div>
          <div>Episodes: {show.number_of_episodes}</div>
        </div>
        <div className="row">
          <StarToggleTag
            starCount={show.vote_average}
            isStarred={isLiked}
            onToggle={toggleIsLiked}
          />
          <PopularityTag popularity={show.popularity} />
          {show.genres && show.genres.length > 0 && show.genres.slice(0, 5).map(genre => (
            <GenreTag key={genre.id} genre={genre.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
