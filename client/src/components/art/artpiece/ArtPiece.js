import React from "react";
import ImageNA from "./ImageNA";

const ArtPiece = ({ props }) => {
  const {
    title,
    primaryImageSmall,
    department,
    culture,
    period,
    artistDisplayName,
  } = props;
  console.log(props);
  return (
    <table>
      <caption>{title}</caption>
      <tbody>
        <tr>
          <td>
            {primaryImageSmall === "" ? (
              <ImageNA />
            ) : (
              <img src={primaryImageSmall} alt={title}></img>
            )}
          </td>
        </tr>
        <tr>
          <td>
            {artistDisplayName === "" ? (
              <p className="bold">Artist: Unknown</p>
            ) : (
              <p className="bold">Artist: {artistDisplayName}</p>
            )}
          </td>
        </tr>
        <tr>
          <td>
            <p>{culture}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{period}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{department}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ArtPiece;
