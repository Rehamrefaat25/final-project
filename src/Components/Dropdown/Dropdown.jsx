
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cart from '/assets/Vector.png';
import { useCart } from 'react-use-cart'

import './Dropdown.css';

function Dropdown() {
  const { totalItems, items, updateItemQuantity, removeItem ,
    cartTotal
      } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (event.target.closest('.dropdown') === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        <img  className="icon-cart"src={cart} alt="Cart" />
        {totalItems}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <h2>Shopping Cart</h2>
          <hr />
          
          {items.map((item) => (
            <div className='shopping-cart' key={item.id}>
              <img src={item.image} alt={item.title} width="50px" />
              <div>
                <h3>{item.title}</h3>
                <span>
                  <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>
                    {item.quantity}
                  </button>
                </span>
                <span className='product-price'>RS{item.price}</span>
              </div>
              <button onClick={() => removeItem(item.id)}>
                <img src="/public/assets/13.jpg" alt="Remove" />
              </button>
            
            </div>
          ))}
          <div className='total'>

            <label>Subtotal</label>
              <span className='cart-total'>RS. {cartTotal}</span>
          </div>
          <hr></hr>
          <Link className="cart-icon" to="/Cart">
            <button>Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
