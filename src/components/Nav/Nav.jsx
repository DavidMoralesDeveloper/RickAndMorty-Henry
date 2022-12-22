import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch , handleRandom , logout }) => {

  return (
    <div className={style.sizeMenu}>
      <div className={style.profile}>
        <div className={style.photo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-1XwCW2h7yDVKxsGnH1X-NUI70B5XCTj1A&usqp=CAU"
            alt="menuImg"
          />
        </div>
      </div>

      <div>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className={style.menuItems}>
        <div className={style.items}>
          
          <div className={style.separator}></div>

          <Link to="/home">
            <div className={style.title}> Home </div>
          </Link>

          <div className={style.separator}></div>

          <Link to="/favorites">
            <div className={style.title}> Favorites </div>
          </Link>

          <div className={style.separator}></div>

          <Link to="/about">
            <div className={style.title}> About </div>
          </Link>

          <button onClick={() => handleRandom()}> Ramdom Character</button>
          <button onClick={() => logout()}> Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
