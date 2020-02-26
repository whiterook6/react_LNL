import React from "react";
import { Show } from "./Show";

export const ShowList = (props) => {
  const shows = props.shows;

  return (
    <div className="stack">
      {shows.map(show => (
        <Show show={show} key={show.id} />
      ))}
    </div>
  );
}