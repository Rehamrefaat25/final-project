
import React from 'react';
import Store from '../Store.js'
import './Customers.css';

function Customers() {
    const { items } = Store();

    return (
        <div className='customer'>
            {items.map((item) => (
                <div key={item.id} className='customer-item'>
                <h4> <img src={item.image}/>
                  {item.title}
                  </h4>
                    <span>{item.details}</span>
            
                </div>
            ))}
        </div>
    );
}

export default Customers;
