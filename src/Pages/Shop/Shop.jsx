
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Customers from '/src/Components/Customers/Customers.jsx';
import './Shop.css';
import { CartProvider, useCart } from 'react-use-cart';

function ShopPage() {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProducts();
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const displayedProducts = products.slice(offset, offset + itemsPerPage);

  return (
    <>
      <div className="contact-page">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <button className="add-to-cart" onClick={() => addItem(product)}>Add to Cart</button>
            <Link  to= {`/product/${product.id}`} className="view-details">
            <h3>{product.title}</h3>
            <label>{product.category}</label>
            <p>{product.price} RS.</p>
            </Link>
          </div>
        ))}
      </div>
      <ReactPaginate
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(products.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      <Customers />
    </>
  );
}

function Shop() {
  return (
    <CartProvider>
      <ShopPage />
    </CartProvider>
  );
}

export default Shop;

