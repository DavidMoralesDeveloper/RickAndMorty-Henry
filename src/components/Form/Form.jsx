import React from "react";
import { validate } from "./validation";
import style from "./Form.module.css";



const Form = (props) => {

 

  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({ username: "", password: "" });

  const handleInputChange = (evento) => {
    const property = evento.target.name;
    const value = evento.target.value;
    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(
      validate({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let ErrorsArray = Object.keys(errors)  ;        
    if(!ErrorsArray.length) props.login(userData)
    else alert('Debes usar el email y password del ejemplo')
    props.login(userData)    
  };

  return (
    <>
    <div className={style.contenerdor }> 

    <div className={style.header}> 
    <div> ejemplo@gmail.com <br/>
       <span> 1password</span> 
       </div>  
       </div>

    <div className={style.login} >
      <form onSubmit={handleSubmit}>
        

        
        <input
          type="email"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder='EMAIL'          
        />
        {errors.username && <p className={style.danger}> {errors.username} </p>}
 
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder='Password'          
        />
        {errors.password && <p className={style.danger}> {errors.password} </p>}

        <button className={style.button}> LOGIN </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Form;
