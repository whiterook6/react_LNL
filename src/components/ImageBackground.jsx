import React from "react";

export const ImageBackground = (props) => {
  const {
    url,
    style
  } = props;

  return (
    <div style={{
      ...style,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.3,
      background: `url(${url}) center center no-repeat`,
      backgroundSize: "cover"
    }} />
  )
};
