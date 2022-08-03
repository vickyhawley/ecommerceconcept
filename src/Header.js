import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import StoreFrontIcon from '@material-ui/icons/Storefront'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none'}}>
      <div className="header__logo">
        <StoreFrontIcon className="header__logoImage" fontSize="large"/>
        <h2 className="header__logoTitle">eCommerce</h2>
      </div></Link>

      <div className="header__search">
        <input type="text" className='header__searchInput' />
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
      <div className="nav__item">
      <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
      </div>
      <Link to='/Checkout' style={{ textDecoration: 'none'}}>
      <div className="nav__itemBasket">
      <ShoppingBasketIcon fontSize="large" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
      </div></Link>
    
      </div>


    </div>
  )
}

export default Header
