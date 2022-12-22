export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export function addCharacter(personaje) {
    return {type : ADD_FAV , payload : personaje}
}

export function deleteCharacter(id){
    return {type : DELETE_FAV , payload: id }
}
export function filterCards (gender) {
    return {tipe : FILTER , payload : gender}
}

export function orderCards (id) {
    return {tipe : ORDER , payload : id}
}
