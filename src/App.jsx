
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Contact from './Pages/Contact/Contact'
import Layout from './Pages/Layout/Layout'
import Cart from './Pages/Cart/Cart'
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails'
function App() {

  return (
<CartProvider>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/Shop" element={<Shop/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/product/:id" element={<ProductsDetails/>} />
          <Route path="/Contact" element={<Contact/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
     </CartProvider>
  )
}

export default App
