import React, { useState } from "react";
import { getImageURL } from "../service";
import { GenreTag } from "./GenreTag";
import { ImageBackground } from "./ImageBackground";
import { PopularityTag } from "./PopularityTag";
import { StarTag } from "./StarTag";

/**
 * Displays an overview of a TV show, including number of episodes, rating, etc. Also allows
 * the user to toggle whether they like the show or not, though this isn't stored in a server
 * anywhere so it's not really persistent.
 */
export const Show = (props) => {
  const show = props.show;
  const [showSeasons, setShowSeasons] = useState(false);

  const toggleShowSeasons = () => {
    setShowSeasons(!showSeasons);
  }

  const backgroundStyle = {
    borderRadius: "6px"
  };

  if (showSeasons){
    backgroundStyle.backgroundPositionY = "top";
  } else {
    backgroundStyle.backgroundPositionY = "center";
  }

  return (
    <>
      <div className="box" style={{ position: "relative" }}>
        <ImageBackground url={getImageURL(show.backdrop_path)} style={backgroundStyle} />
        <div className="stack" style={{position:"relative"}}>
          <div className="row">
            <h1 className="title is-4">{show.name}</h1>
            <button class="button is-small is-primary" onClick={toggleShowSeasons}>Toggle seasons</button>
          </div>
          {showSeasons && (
            <>
              <h2 className="subtitle is-4">Seasons</h2>
              <div style={{maxHeight:"300px", overflowY: "auto"}}>
                {show.seasons.filter(season => season.season_number > 0).map(season => (
                  <div className="box" key={season.id}>
                    <h1 className="title is-5">{season.name}</h1>
                    <div>{season.overview}</div>
                  </div>
                ))}
              </div>
            </>
          ) || (
            <>
              <h2 className="subtitle is-4">{show.first_air_date} to {show.last_air_date}</h2>
              <div>{show.overview}</div>
              <div className="row">
                <div>Seasons: {show.number_of_seasons}</div>
                <div>Episodes: {show.number_of_episodes}</div>
              </div>
              <div className="row">
                <StarTag starCount={show.vote_average} />
                <PopularityTag popularity={show.popularity} />
                {show.genres && show.genres.length > 0 && show.genres.slice(0, 5).map(genre => (
                  <GenreTag key={genre.id} genre={genre.name} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
