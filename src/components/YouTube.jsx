import React from "react";

const YouTube = (props) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "56.25%",
      overflow: "hidden",
      maxWidth: "100%",
      marginTop: "1em",
    }}
  >
    <iframe
      title={props.id}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      src={`https://www.youtube.com/embed/${props.id}`}
      frameBorder="0"
      allowFullScreen="allowfullscreen"
    />
  </div>
);

export default YouTube;
