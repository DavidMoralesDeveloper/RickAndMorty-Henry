import style from'./Card.module.css'

export default function Card(props) {
   return (
      <>
      <div className={style.nombre} >
         <h2>{props.name}</h2>
      </div>
      <div className={style.image} >
         <img  src={props.image} alt="Fotos" className={style.imagenes} />
      </div>
      <div className={style.content} >
         <h2> {props.species} </h2>
         <h2>{props.gender}</h2>
      </div>
         <button onClick={props.onClose}>X</button>
      </>
   );
}
