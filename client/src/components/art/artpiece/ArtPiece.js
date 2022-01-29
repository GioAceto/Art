import React from "react";

const ArtPiece = ({ props }) => {
  const {
    title,
    primaryImageSmall,
    department,
    isHighlight,
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
            <img src={primaryImageSmall} alt={title}></img>
          </td>
        </tr>
        <tr>
          <td>
            <p>{artistDisplayName}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{department}</p>
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
      </tbody>
    </table>
  );
};

export default ArtPiece;
