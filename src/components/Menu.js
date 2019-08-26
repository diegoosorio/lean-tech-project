import React from 'react';
import './styles/Menu.css'

class Menu extends React.Component {
  render(){
    return(
      <div className="Menu">
        <a href="/" className="Link">
          <i className="fas fa-home"></i>
          <p>Home</p>
        </a>
        <a href="/" className="Link">
          <i className="far fa-envelope"></i>
          <p>Messages</p>
        </a>
        <a href="/" className="Link">
          <i class="fas fa-star"></i>
          <p>Wishlist</p>
        </a>
        <a href="/" className="Link">
          <i class="fas fa-cog"></i>
          <p>Settings</p>
        </a>
        <a href="/" className="Link">
          <i class="fas fa-user"></i>
          <p>My Account</p>
        </a>
      </div>
    )
  }
}

export default Menu;