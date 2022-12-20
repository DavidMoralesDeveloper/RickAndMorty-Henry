export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'

export function addCharacter(personaje) {
    return {type : ADD_FAV , payload : personaje}
}

export function deleteCharacter(id){
    return {type : DELETE_FAV , payload: id }
}