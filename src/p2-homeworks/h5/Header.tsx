import React from 'react'
import {NavLink} from "react-router-dom";
import header_style from './styles/header.module.scss'

function Header() {
    return (
        <div className={header_style.wrapper}>
          <div className={header_style.title}>
            <h1>react homework</h1>
          </div>
          <div className={header_style.navbar}>
            <NavLink to='/pre-junior' className={header_style.navLink}>pre-junior</NavLink>
            <NavLink to='/junior' className={header_style.navLink}>junior</NavLink>
            <NavLink to='/junior-plus' className={header_style.navLink}>junior-plus</NavLink>
          </div>
        </div>
    )
}

export default Header
