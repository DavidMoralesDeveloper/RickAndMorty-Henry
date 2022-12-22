import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.contenedor}>
      <div className={style.card}>
        {characters.map(({ name, species, gender, image, id }, index) => {
          return (
            <Card
              key={index}
              name={name}
              species={species}
              gender={gender}
              image={image}
              id={id}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}
