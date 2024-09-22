import { Link, Outlet } from "react-router-dom";
import './Layout.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function Layout() {
  return (
    <>
    
 <Navbar></Navbar>
      <Outlet/>
<Footer></Footer>
    </>
  );
}

export default Layout;
