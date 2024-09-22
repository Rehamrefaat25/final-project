import React, { useState, useEffect } from 'react';
import './Home.css';
import Customers from '../../Components/Customers/Customers';

function Home() {
  const [categories, setCategories] = useState([]);

  const categoryImages = {
    electronics: "/assets/electronic.png",
    jewelery: "/assets/jewellery.jpg",
    "men's clothing": "/assets/men-clothes.jpg",
    "women's clothing": "/assets/women-clothes.png",
  };

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    callApi();
  }, []);

  return (
    <>
      <div className='home-page'>
        <div className="header">
          <img 
            src="/assets/scandinavian-interior-mockup-wall-decal-background 1.png" 
            alt="Decor" 
            height="200px" 
            width="100%"
          />
          <h1>Categories</h1>
        </div>

        <div className='categories'>
          {categories.length > 0 ? (
            categories.map((item, index) => (
              <div key={index} className="category-item">
                <img src={categoryImages[item]} alt={item} />
                <h3>{item}</h3>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>
      
      <Customers />
    </>
  );
}

export default Home;
