import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <CustomLink to={'/'}>HOME</CustomLink>
            <CustomLink to={'/customrreview'}>CUSTOMER REVIEWS</CustomLink>
            <CustomLink to={'/dashboard'}>DASHBOARD</CustomLink>
            <CustomLink to={'/blogs'}>BLOGS</CustomLink>
            <CustomLink to={'/about'}>ABOUT</CustomLink>
        </nav>
    );
};

export default Navbar;