import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='head'>
            <div className='header'>
                <h1 id='text'>Component Practice</h1>
            </div>
            <div className='navigation'>
                <nav>
                       
                    <a href="">Shop</a>
                    <a href="">Inventory</a>
                    <a href="">Contact</a>
                    
                </nav>
            </div>
        </div>
    );
};

export default Header;