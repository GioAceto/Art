import React from "react";

const ArtPiece = ({ props }) => {
  const { title, primaryImageSmall, department } = props;
  console.log(props);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default ArtPiece;
