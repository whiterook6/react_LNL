import React from "react";
import { FaDotCircle } from "react-icons/fa";

export const GenreTag = (props) => {
  const genre = props.genre;

  return (
    <div className="tag">
      <FaDotCircle style={{ marginRight: "0.5rem" }} />
      {genre}
    </div>
  );
};
