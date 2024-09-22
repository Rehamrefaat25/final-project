import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (<>
  <div className='footer-container'>

    <div className='fun'>
        <h2>Funiro.</h2>
   <p>
    400 University Drive Suite 200 Coral<br></br> Gables,<br></br>
FL 33134 USA
   </p>
    </div>
    <div className='links'>
<label>Links</label>
<Link to="/">Home</Link>
<Link to="/Shop">Shop</Link>
<Link to="#">About</Link>
<Link to="/Contact">Contact</Link>

    </div>
    <div className='help'>
        <label>Help</label>
        <p>payment options</p>
        <p>returns</p>
        <p>privacy policies </p>
    </div>
    <div className='news'>
    <label>
        Newsletter
    </label>
    <input type="email" placeholder='Enter your email adress'/>
    <button>SUBSCRIBE</button>
</div>
  </div>
<hr></hr>
<p className='rights'>
2023funiro.All rights reversed
</p>
</>
  )
}

export default Footer
