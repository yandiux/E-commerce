import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/headerScreen.css'

const HeaderScreen = () => {

  const navbar = useRef()

  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'> <i className="fa-solid fa-cube"></i> CuboMagic-E</Link>
      </h1>
      <div onClick={clickMenuHam} className="header__menuham">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink 
                to='/login' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-user"></i>
              <p className="navbar__label"></p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/purchases' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-store"></i>
              <p className="navbar__label"></p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/cart' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="navbar__label"></p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
