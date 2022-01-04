/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-965117.jpg&fm=jpg" alt="Header Image" />
        </div>
    );
};

export default Header;