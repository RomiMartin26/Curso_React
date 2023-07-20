import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCharacter from "../../common/cardCharacter/CardCharacter";

const Characters = () => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    /*  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(res => setCharacters(res.results)) */

    //usando Axios

    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  return (
    <>
      <Typography variant="h2" color="primary" align="center">
        Personajes
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {characters.map((character) => {
          return <CardCharacter character={character} key={character.id} />;
        })}
      </div>
    </>
  );
};

export default Characters;
