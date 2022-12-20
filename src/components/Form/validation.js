export function validate({ username, password }) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,10})");

    const errors = {}

    if (!regexEmail.test(username)) errors.username = 'Debes usar el email de ejemplo'
    if (!mediumRegex.test(password)) {
        errors.password = 
        `Debes usar el password de ejemplo
        `}

    return errors
}