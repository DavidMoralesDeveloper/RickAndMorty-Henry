import { connect, useDispatch } from "react-redux";
import {orderCards, filterCards} from'../../redux/actions'

const Favorites = ({ myFavorites }) => {

  const dispatch = useDispatch()

  function handleFilter(event) {
    dispatch(filterCards(event.target.value))
  }

  function handleOrder(event) {
    dispatch(orderCards(event.target.value))
  }
  console.log(myFavorites)
  console.log(filterCards())
  return (
    
    <>
      <div>Favorites</div>
      <div>
        <select onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>

      <div>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless ">Genderless </option>
          <option value="unknown ">unknown </option>
        </select>
      </div>
      

      <div>
        {myFavorites.map((character) => (
          <div key={character.id} >
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <h3>{character.species}</h3>
            <h3>{character.gender} genero</h3>
            <h3>{character.id}</h3>
            

          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters
  };
};


export default connect(mapStateToProps, null)(Favorites);
