import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtPiece from "./artpiece/ArtPiece";

// 477392
// 6311

const Art = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res1 = await axios.get(
          "https://collectionapi.metmuseum.org/public/collection/v1/objects"
        );
        const total = res1.data.total;
        const objIdsArr = res1.data.objectIDs;
        const randomIndex = Math.floor(Math.random() * total);
        const id = objIdsArr[randomIndex];
        // console.log(total);
        // console.log(objIdsArr);
        // console.log(randomIndex);
        // console.log(id);
        const res2 = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        const artObject = res2.data;
        setData(artObject);
      } catch (error) {
        console.log("Error page not found");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <h2 className="loading">Loading...</h2>}
      {!loading && <ArtPiece props={data} />}
    </div>
  );
};

export default Art;
