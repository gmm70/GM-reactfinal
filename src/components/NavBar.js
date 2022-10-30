import style from '../style/style.css'

import CartWidget from './CartWidget'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../services/index'


const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link to='/'>
          <h2>GM</h2>
        </Link>
        <div className="Categories">
            <NavLink to='/category/camiseta' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
            <NavLink to='/category/botines' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
            <NavLink to='/category/guante' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guantes</NavLink>

        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar