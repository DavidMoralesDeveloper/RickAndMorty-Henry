import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div className='Cards' >
     
     {characters.map(function (character) {
      return(
         <Card 
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         )
      }
      )} 
      
   </div>;
}
