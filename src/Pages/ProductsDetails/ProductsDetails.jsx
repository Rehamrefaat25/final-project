import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import "./ProductsDetails.css"
function ProductsDetails() {
  const { id} = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error( error);
      }
    
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }}
  return (<>

    <div className="product-details">
    <div className='product-image' >
      <img src={product.image} alt={product.title} height="300px"  width="300px"/>
    </div>
    <div className='describe-product'>
      <h1>{product.title}</h1>
      <p className='price'> RS.{product.price}</p>
      <p>{product.description}</p>
      <p className='size'>Size</p>
    
      <button className='sizes'>L</button>
      <button className='sizes'>XL</button>
      <button className='sizes'>XS</button>


      <div className='buttons'>
      <div className="quantity-controls">
          <button onClick={decreaseQuantity}> <img src="/assets/8.jpg"></img> </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}> <img src="/assets/9.jpg"></img></button>
        </div>
        <div>
      <button onClick={() => addItem(product)} className="add-cart">Add to cart</button>
      </div>
        </div>
      <div className='tags'>
      <hr></hr>
      <p><span>SKU</span>:{product.id}</p>
      <p> <span>Category</span>
      :{product.category}</p>
      <p> <span>Tags   </span>:{product.category}, Home, Shop</p>
      <p><span>Share  </span> :<img src="/assets/16.jpg"></img>
      <img src="/assets/18.jpg"></img>
      <img src="/assets/10.jpg"></img></p>
      </div>
      
    </div>
    </div>
    <hr></hr>
    <div className='description'>
    <h2>Description</h2>
    <p>{product.description }</p>
    </div>
  </>
  );
}

export default ProductsDetails;
