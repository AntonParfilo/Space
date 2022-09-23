import React, { useEffect, useRef, useState } from "react";
import s from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";

const Header = () => {

  // Menu
  const menu_items = useRef();
  let stateMenu = useSelector((state) => state.menu);
  useEffect(() => {
    for(let el of menu_items.current.children){
      if (el.innerHTML === stateMenu) el.classList.add("active_menu");
      else el.classList.remove("active_menu");
    }
  }, []);
  useEffect(() => {
    for(let el of menu_items.current.children){
      if (el.innerHTML === stateMenu) el.classList.add("active_menu");
      else el.classList.remove("active_menu");
    }
  }, [stateMenu]);

  // Burger button
  const burger_menu = useRef();
  const burger_button = useRef();
  function burgerMenu(e) {
    burger_button.current.classList.toggle("opened");
    burger_menu.current.classList.toggle("show_burger_menu");
  }

  function closeMenu(){
    burger_button.current.classList.toggle("opened");
    burger_menu.current.classList.toggle("show_burger_menu");
  }

  return (
    <>
      <nav className={s.burger__menu} ref={burger_menu}>
          <NavLink className="header__menu_item" to="/" onClick={closeMenu}>
            HOME
          </NavLink>
          <NavLink className="header__menu_item" to="destination" onClick={closeMenu}>
            DESTINATION
          </NavLink>
          <NavLink className="header__menu_item" to="crew" onClick={closeMenu}>
            CREW
          </NavLink>
          <NavLink className="header__menu_item" to="technology" onClick={closeMenu}>
            TECHNOLOGY
          </NavLink>
      </nav>
      <header id="header">
        <div className={s.header__logo}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={s.header__border}></div>

        <nav className={s.header__menu} ref={menu_items}>
          <NavLink className="header__menu_item" to="/">
            HOME
          </NavLink>
          <NavLink className="header__menu_item" to="destination">
            DESTINATION
          </NavLink>
          <NavLink className="header__menu_item" to="crew">
            CREW
          </NavLink>
          <NavLink className="header__menu_item" to="technology">
            TECHNOLOGY
          </NavLink>
        </nav>

        <div className={s.header__burger}>
          <button className={s.burger} ref={burger_button} onClick={burgerMenu}>
            <span className="bar_top"></span>
            <span className="bar_mid"></span>
            <span className="bar_bot"></span>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
