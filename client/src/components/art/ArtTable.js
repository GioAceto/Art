import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtPiece from "./artpiece/ArtPiece";

// 477392

const ArtTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axios.get(
          "https://collectionapi.metmuseum.org/public/collection/v1/objects"
        );
        const total = res1.data.total;
        const objIds = res1.data.objectIDs;
        const randomIndex = Math.floor(Math.random() * total + 1);
        const randomObj = objIds[randomIndex];
        // console.log(total);
        // console.log(objIds);
        // console.log(randomIndex);
        // console.log(randomObj)
        const res2 = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObj}`
        );
        const artObject = res2.data;
        setData(artObject);
      } catch (error) {
        console.log("Error page not found");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {!loading && <ArtPiece props={data} />}
    </div>
  );
};

export default ArtTable;
