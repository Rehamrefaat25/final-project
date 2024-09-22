import React from 'react'
import { Link } from 'react-router-dom'
import {CartProvider,useCart } from 'react-use-cart';

import Dropdown from '../Dropdown/Dropdown'
import './Navbar.css'
function Navbar() {
  const{totalItems}=useCart()

  return (
    <CartProvider>
    <div className="navbar">
    <nav>
    <ul className="navbar-nav">
    <div>
      <Link className="navbar-brand" to="/">Furniro</Link>
         </div>
         <div className='home'>
          <li className="nav-item1">
            <Link className="nav-link" to="/">Home</Link>
          </li>
            
          <li className="nav-item2">
            <Link className="nav-link" to="/Shop">Shop</Link>
          </li>
          </div>
          <div>
          <li className="nav-item3">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          </div>

          <Dropdown></Dropdown>

          </ul>
          </nav>
          </div>
</CartProvider>
  )
}

export default Navbar