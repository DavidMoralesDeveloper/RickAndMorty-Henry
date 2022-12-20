import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCharacter, deleteCharacter } from "../../redux/actions";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteCharacter(props.id);
    } else {
      setIsFav(true);
      const Character = {
        id: props.id,
        species: props.species,
        name: props.name,
        image: props.image,
      };
      props.addCharacter(Character);
    }
  }

  


  return (
    <>
      <div className={style.nombre}>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
      </div>
      <div className={style.image}>
        <img src={props.image} alt="Fotos" className={style.imagenes} />
      </div>
      <div className={style.content}>
        <h2> {props.species} </h2>
        <h2>{props.gender}</h2>
      </div>
      <button id={props.id} onClick={props.onClose}>
        X
      </button>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </>
  );
}

export const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (personaje) => dispatch(addCharacter(personaje)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
