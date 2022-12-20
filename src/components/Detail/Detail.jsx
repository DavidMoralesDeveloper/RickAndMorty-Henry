import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { detailId } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  
  return <div>
    <h1>{character.name}</h1>
    <h2> {character.status} </h2>
    <h2> {character.specie} </h2>
    <h2> {character.genrer} </h2>
    {/* <h2> {character.origin} </h2> */}

    <img src={character.image} alt={character.name} />


    Name 
    Status 
    Specie 
    Genrer 
    Origin 
    Image</div>;
};

export default Detail;
