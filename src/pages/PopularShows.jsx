import React, { useEffect, useState } from "react";
import { getPopularShows } from "../service";
import { FaSpinner, FaExclamation } from "react-icons/fa";
import { ShowFilter } from "../components/ShowFilter";

export const PopularShows = () => {
  const [isLoading, setIsLoading] = useState(true); // do we show a spinner
  const [error, setError] = useState(undefined); // has there been an error loading shows
  const [shows, setShows] = useState([]); // what shows did we load

  /** Asynchronous callback to load popular shows */
  const loadShows = async () => {
    setIsLoading(true);

    try {
      const s = await getPopularShows();
      setShows(s);
    } catch (error){
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger a callback after a render
  useEffect(() => {
    loadShows();
  }, []); // the empty array means this callback is run only after the initial render

  // Only render a spinner if we're still loading
  if (isLoading){
    return (
      <div>
        <h1 className="title">Popular Shows</h1>
        <FaSpinner />
      </div>
    );
  }

  // only render the error if there's an error
  if (error){
    return (
      <div>
        <h1 className="title">Popular Shows</h1>
        <div>
          <FaExclamation />
          Error: {error.message}
        </div>
      </div>
    );
  }

  // if there are no messages, say so
  if (!shows || shows.length === 0){
    return (
      <div>
        <h1 className="title">Popular Shows</h1>
        <div>No shows found!</div>
      </div>
    );
  }

  // otherwise, render the ShowFilter component, and give it shows to filter
  return (
    <div>
      <h1 className="title">Popular Shows</h1>
      <ShowFilter shows={shows} />
    </div>
  );
};
