import React from "react";
import { FaUsers } from "react-icons/fa";

export const PopularityTag = (props) => {
  const popularity = props.popularity;

  return (
    <div className="tag">
      <FaUsers style={{ marginRight: "0.5rem" }} />
      {Math.round(popularity)}
    </div>
  );
};
