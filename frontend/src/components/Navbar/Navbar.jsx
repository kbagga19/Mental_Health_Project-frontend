import React, { useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({isHomePage}) => {
    // useEffect(() => {
    //     if (localStorage.getItem('token') !== null) {
    //         fetch('http://localhost:8080/current-user',{
    //             crossDomain: true,
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 Accept: "application/json",
    //                 "Access-Control-Allow-Origin": "*",
    //                 'Authorization': `Bearer ${localStorage.getItem('token')}`     
    //             },    
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    //     }
    // }, []);

    function logout() {
        localStorage.clear();
        alert('User Logged Out!')
        window.location.reload();
    }

    return (
        <nav className={`navbar ${isHomePage ? 'homepage-navbar' : ''}`}>
            <div className='navLeft'>
                {/* logo */}
                <Link to="/" className={`${isHomePage ? 'homepage-title' : 'title'}`}>Website</Link>
            </div>
            <div className={`${isHomePage ? 'homepage-navCenter' : 'navCenter'}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/categories">Take A Test</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                    <li><NavLink to="/community">Community</NavLink></li>
                    <li><NavLink to="/contact">Therapists</NavLink></li>
                </ul>
            </div>
            {
                localStorage.getItem('token') !== null ? (
                    <div className={`${isHomePage ? 'homepage-navRight' : 'navRight'}`}>
                        <ul>
                            <li className={`${isHomePage ? 'homepage-greeting' : 'greeting'}`}>Hello ,  {localStorage.getItem('name')}</li>
                            <li className={`${isHomePage ? 'homepage-logout' : 'logout'}`} onClick={logout}>Logout</li>
                        </ul>
                    </div>                
                ) : (
                    <div className={`${isHomePage ? 'homepage-navRight' : 'navRight'}`}>
                        <ul>
                            <li><NavLink to="/login">Log In</NavLink></li>
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                        </ul>
                    </div>                
                )
            }
        </nav>
    )
}

export default Navbar;