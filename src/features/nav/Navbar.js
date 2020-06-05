import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { totalItems } from '../cart/cartSlice';

const Navbar = () => {
  const basketCount = useSelector(totalItems);

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">Redux Store</Link>
          <ul className="right">
            <li><Link to="/cart">My cart<span className="new badge round" data-badge-caption="">{basketCount}</span></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
