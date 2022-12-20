import { ADD_FAV, DELETE_FAV } from "./actions"

const initialState ={
  myFavorites : []
}

const reducer = (state = initialState,actions) => {
  
  switch (actions.type) {
    case ADD_FAV:
      return{
        ...state,
        myFavorites:[...state.myFavorites,actions.payload]
      }
    case DELETE_FAV:
      return{
        ...state,
        myFavorites: state.myFavorites?.filter(fav => fav.id !== actions.payload)
      }
  
    default:
      return {
        ...state
      }
  }
  
}

export default reducer