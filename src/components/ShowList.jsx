import React from "react";
import { Show } from "./Show";

/**
 * Given a list of shows, render them in a nice stack
 */
export const ShowList = (props) => {
  const shows = props.shows;

  return (
    <div className="stack">
      {shows.length > 0 ? shows.map(show => (
        <Show show={show} key={show.id} />
      )) : (
        <div>No Shows</div>
      )}
    </div>
  );
}