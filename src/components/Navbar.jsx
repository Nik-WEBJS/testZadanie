/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import c from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={c.Navbar}> 
        <div className={c.item}> <NavLink to='/Input'>input</NavLink></div >
          <div className={c.item}> <NavLink to='/Prihod'>Prihod</NavLink></div>
          <div className={c.item}> <NavLink to='/KontrAgent'>KontrAgent</NavLink></div >
         
        </div >
    )
}

export default Navbar