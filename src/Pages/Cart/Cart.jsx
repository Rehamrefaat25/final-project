// import React from 'react'
// import {CartProvider,useCart } from 'react-use-cart';
// import './Cart.css'
// import Customers from '../../Components/Customers/Customers'
// function CartPage() {
//     const {
//       isEmpty,
//       items,
//       updateItemQuantity,
//       removeItem,
//       totalItems,
//       cartTotal
  
//     } = useCart();
  
//     if (isEmpty) return <p className='empty'>Your cart is empty</p>;
  
//     return (
//       <>
//         <div className="contact-page">
//         <h1>Cart</h1>
//       </div>
//         <div className="cart-container">
//   <div className='table1'>
//   <table >
//   <thead>
//       <tr>
//           <th colSpan={2}> product</th>
//           <th>price</th>
//           <th>Qantity</th>
//           <th>Total</th>
//       </tr>
//   </thead>
//   <tbody>
  
//           {items.map((item) => (
//             <tr >
//               <td > <img  className='cart-image' src={item.image} ></img> 
//               </td>
//               <tr>
//               <td className='cart-title'>
//               {item.title}
//               </td>
//               </tr>
//               <td className='price'>RS. {item.price}</td>
//               <td>
//               <button  className='cart-quantity' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}> {item.quantity}</button>
//               </td>
//               <td>{item.price*item.quantity}RS.
//                <button  className='remove-icon' onClick={() => removeItem(item.id)}>
//                 <img  src="/public/assets/17.jpg"></img>
//                </button></td>
//             </tr>
//           ))}
//   </tbody>
//       </table>
//       </div>
//       <div className='table2'>

//           <table>
// <tr>

//               <th>Cart Totals</th>
//  </tr>

// <tr>
//               <td>Total</td>
//               <td className='cart-total'>RS. {cartTotal}</td>
// </tr>
// <tr>

//               <td className='check'>
//                 <button>Ckeck Out</button>
//               </td>
// </tr>
//           </table>
//       </div>
          
      
//   </div>

//   </>
//       );
//   }
  
// function Cart() {
//   return (
// <CartProvider>
//     <CartPage/>
//   <Customers></Customers>
// </CartProvider>

//   )
// }

// export default Cart
import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import './Cart.css';
import Customers from '../../Components/Customers/Customers';

function CartPage() {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
  } = useCart();

  if (isEmpty) return <p className="empty">Your cart is empty</p>;

  return (
    <>
      <div className="contact-page">
        <h1>Cart</h1>
      </div>
      <div className="cart-container">
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img className="cart-image" src={item.image} alt={item.title} />
                  </td>
                  <td className="cart-title">{item.title}</td>
                  <td className="price">RS. {item.price}</td>
                  <td>
                    <button
                      className="cart-quantity"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="cart-quantity"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    RS. {item.price * item.quantity}
                    <button className="remove-icon" onClick={() => removeItem(item.id)}>
                      <img src="/assets/17.jpg" alt="Remove" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table2">
          <table>
            <thead>
              <tr>
                <th>Cart Totals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total</td>
                <td className="cart-total">RS. {cartTotal}</td>
              </tr>
              <tr>
                <td className="check">
                  <button>Check Out</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Cart() {
  return (
    <CartProvider>
      <CartPage />
      <Customers />
    </CartProvider>
  );
}

export default Cart;
