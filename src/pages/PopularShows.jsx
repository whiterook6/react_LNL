import React, { useEffect, useState } from "react";
import { getShows } from "../service";
import {FaSpinner, FaExclamation} from "react-icons/fa";
import { ShowList } from "../components/ShowList";

export const PopularShows = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [shows, setShows] = useState([]);

  const loadShows = async () => {
    setIsLoading(true);

    try {
      const s = await getShows();
      setShows(s);
    } catch (error){
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadShows();
  }, []);

  if (isLoading){
    return (
      <div>
        <h1 className="title">Popular Shows</h1>
        <FaSpinner />
      </div>
    );
  }

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

  if (!shows || shows.length === 0){
    return (
      <div>
        <h1 className="title">Popular Shows</h1>
        <div>No shows found!</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="title">Popular Shows</h1>
      <ShowList shows={shows} />
    </div>
  );
};
