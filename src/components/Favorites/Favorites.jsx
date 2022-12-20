import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
  return (
    <>
      <div>Favorites</div>
      <div>
        {myFavorites.map((character) => (
          <div>
            <h3>{character.name}</h3>
            <img src={character.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
