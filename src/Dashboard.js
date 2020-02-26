import React, { useState, useEffect } from "react";
import { getShows, getImageURL } from "./service";

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(undefined);

  const loadPopularShows = async () => {
    setIsLoading(true);
    try {
      const popularShows = await getShows();
      setShows(popularShows);
    } catch (error){
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPopularShows();
  }, []);

  if (isLoading){
    return (
      <h1>Loading Popular Shows</h1>
    );
  }

  if (error){
    return (
      <h1>Error loading TV Shows</h1>
    );
  }

  if (shows.length === 0){
    return (
      <h1>No Popular Shows found.</h1>
    )
  }

  return (
    <div className="stack">
      {shows.map(show => (
        <div className="card" key={show.id}>
          <div className="card-image">
            <figure className="image is-3by1" style={{background: `url("${getImageURL(show.poster_path)}") no-repeat fixed center center`}} />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{show.original_name}</p>
              </div>
            </div>

            <div className="content">
              {show.overview}
              <div>Rating: {show.vote_average}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}