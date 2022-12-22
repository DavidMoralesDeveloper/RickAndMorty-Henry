import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, actions) => {

  switch (actions.type) {
    case ADD_FAV:
      return {
        ...state,
        //     myFavorites:[...state.myFavorites,actions.payload]
        allCharacters: [...state.allCharacters, actions.payload],
        myFavorites: [...state.allCharacters, actions.payload]
      }
    case DELETE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites?.filter(fav => fav.id !== actions.payload)

      }
    case FILTER:
        // ...state,
        // myFavorites: [state.allCharacters.filter(genero => genero.status === actions.payload)]
        if(actions.payload === '') return { ...state, myFavorites: state.allCharacters }
        return {
           ...state, myFavorites: state.allCharacters?.filter(genero => genero.gender === actions.payload) 
          }
    case ORDER:
      // return {
      //   myFavorites: [...state.allCharacters.sort((a, b) => {
      //     if ('Ascendiente' === actions.payload) return a.id - b.id
      //     if ('Descendiente' === actions.payload) return b.id - a.id
      //   })]

      // }
      const sortedCharacters = state.allCharacters
            if (actions.payload === 'Ascendente') sortedCharacters.sort((a, b) => a.id - b.id)  
            else sortedCharacters.sort((a, b) => b.id - a.id)  
            
                return {...state, myFavorites: sortedCharacters}

    default:
      return {
        ...state
      }
  }

}

export default reducer