import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Set active menu based on current route
  const getActiveMenu = () => {
    const path = location.pathname
    if (path === '/') return 'home'
    if (path === '/reserve-table') return 'Reserve-Table'
    if (path === '/login') return 'login'
    if (path === '/signup') return 'signup'
    if (path === '/cart') return 'cart'
    return ''
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className='navbar' id="top">
      <div className="navbar-container">
        <Link to='/' className="logo-link">
          <img src={assets.logo} alt="Restaurant Logo" className='logo' />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <img 
            src={mobileMenuOpen ? assets.close_icon : assets.menu_icon} 
            alt={mobileMenuOpen ? "Close menu" : "Open menu"} 
          />
        </button>

        {/* Desktop Navigation */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to='/' 
              className={getActiveMenu() === "home" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to='/reserve-table' 
              className={getActiveMenu() === "Reserve-Table" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve Table
            </Link>
          </li>
          <li>
            <Link 
              to='/about-us' 
              className={getActiveMenu() === "About-Us" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <a 
              href='#footer' 
              className={getActiveMenu() === "Contact-Us" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="auth-links">
            <Link 
              to="/login" 
              className={getActiveMenu() === "login" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className={getActiveMenu() === "signup" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
          <div className="navbar-cart">
            <Link to='/cart' onClick={() => setMobileMenuOpen(false)}>
              <img src={assets.basket_icon} alt="Shopping cart" />
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar