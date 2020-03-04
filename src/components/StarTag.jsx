import React from "react";
import { FaStar } from "react-icons/fa";

/**
 * Simple component that shows a filled star
 */
export const StarTag = (props) => {
  const {
    starCount,
  } = props;

  return (
    <div className="tag">
      <FaStar style={{ color: "orange", marginRight: "0.5rem" }} />
      <span>{starCount}</span>
    </div>
  )
};