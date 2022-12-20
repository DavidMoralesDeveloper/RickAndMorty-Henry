import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar(props) {

   const [character, setCharacter] = useState('')
      
   const handleInputChange = (event)=>{
      setCharacter(
         event.target.value
      );
   }



   return (
      <div className={style.serchBar}>
         <input 
         placeholder='INTRODUCE UN ID ' 
         onChange={handleInputChange}  
         type='search' />
         
         <div>
         <button 
         className={style.button}
         onClick={()=>props.onSearch(character) }
         >
         Add Card
         </button>
         </div>
      </div>
   );
}
