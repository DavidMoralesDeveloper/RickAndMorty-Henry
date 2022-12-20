import React from 'react'
import Cards from '../Cards/Cards'
import style from'./Home.module.css'

const Home = ({characters, onClose}) => {
  return (
    <div className={style.contenedor}>
        <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default Home