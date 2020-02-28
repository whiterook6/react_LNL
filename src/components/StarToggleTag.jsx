import React from "react";
import { FaStar } from "react-icons/fa";

export const StarToggleTag = (props) => {
  const {
    starCount,
    isStarred,
    onToggle
  } = props;

  return (
    <div className="tag" onClick={onToggle}>
      <FaStar style={isStarred ? { color: "orange", marginRight: "0.5rem" } : { marginRight: "0.5rem" }} />
      <span>{starCount}</span>
    </div>
  )
};