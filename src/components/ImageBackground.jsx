import React from "react";

/**
 * Draws a simple faded background with the given url. Allows additional style options to be passed
 * through to the background. Note that the parent element will need a relative positioning, as
 * will sibling elements. See Show.jsx for an example.
 */
export const ImageBackground = (props) => {
  const styleIMG = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.3,
    background: `url(${props.url}) center center no-repeat`,
    backgroundSize: "100% auto"
  };

  return (
    <div style={{...styleIMG, ...props.style}} />
  )
};
