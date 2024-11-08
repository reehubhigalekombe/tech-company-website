import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Pic from "../assets/G-Space.png";
import "../styles/navbar.css";
import SignIn from "../Sign/SignIn"

function Navbar() {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const toggleSignIn = () => {
        setIsSignInOpen(!isSignInOpen)
    }
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    }
    const handleMouseLeave = () => {
        setActiveMenu(null)
    }

  return (
    <nav className='navbar'>
<div className='leftSide'>
    <Link to="/contact">
    <img src={Pic}   alt='higal'/>
    </Link>
</div>
<h1 style={{color: "blue", fontFamily:  "cursive", fontSize: "28px"}}>G-Space Technologies</h1>
<button onClick={toggleSignIn} style={styles.signInButton} >
{isSignInOpen ? "Close Sign In" : "Sign In"}
{isSignInOpen && <SignIn/>}
</button>
<ul className='navbar-menu'>
    <li>
        <Link to="/"> 
        Home
        </Link>
    </li>
    <li onMouseEnter = { () => handleMouseEnter ("company")}
        onMouseLeave = {handleMouseLeave}
        >
        <Link to="/company">Company</Link>
        {activeMenu === "company" && (
            <ul className='submenu'>
                <li> <Link to="/company/about">About US</Link></li>
                <li> <Link to="/company/our">Our team</Link></li>
                <li> <Link to="/company/award">Awards</Link></li>
            </ul>
        )}
    </li>
    <li><Link to="/client">Client</Link></li>
    <li><Link to="/partnerships">Partnerships</Link></li>

    <li onMouseEnter = { () => handleMouseEnter ("company")}
        onMouseLeave = {handleMouseLeave}
        >
        <Link to="/company">Services</Link>
        {activeMenu === "company" && (
            <ul className='submenu'>
                <li> <Link to="/services/software">Software Dev</Link></li>
                <li> <Link to="/services/web">Web Dev</Link></li>
                <li> <Link to="/services/it">IT Consultancy </Link></li>
            </ul>
        )}
    </li>
    <li><Link to="/blog">Blog</Link>  </li>
    <li><Link to="/contact"> Contact</Link></li>

</ul>
    </nav>
  )
}

const styles = {
    siggnInButton: {
        cursor: "pointer",
        borderRadius: "5px",
        padding: "20px 30px",
        border: "none",
        color: "black",
        backgroundColor: "white",

    }

}
export default Navbar
