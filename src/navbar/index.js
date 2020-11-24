import React from 'react';//rafce
import {Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink} from './navbar';

const Navbar = () => {
    return (
        <>
           <Nav>
               <NavLink to='/'>   
                   <img src={require('../images/logo2.png')} alt='logo' />
               </NavLink> 
               <Bars />
               <NavMenu>
                   <NavLink to='/about' activeStyle >
                       About
                   </NavLink>
                   <NavLink to='/services' activeStyle >
                       services
                   </NavLink>
                   <NavLink to='/contact-us' activeStyle >
                       Contact Us
                   </NavLink>
                   <NavLink to='/sign-up' activeStyle >
                       sign Up
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='signin'>sign In</NavBtnLink>
               </NavBtn>
           </Nav>  
        </>
    );
};

export default Navbar;
