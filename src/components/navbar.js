import React from 'react';
// import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

import '../styles/navbar.css';


const NavBar = props => {
    return (
        <AuthContext.Consumer>
            {
                user => {
                    if (user) {
                        return (
                                <React.Fragment>
                                    <nav className='navbar  navbar-expand-xl fixed-top'>
                                        <div className='container-fluid'>
                                            <ul className = 'navbar-nav'>
                                            <li className='nav-item dropdown'>
                                                <a className='nav-link dropdown-toggle' href='/' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                                    SHOP BY CATEGORY </a>
                                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                                    <a className='dropdown-item' href='/'>MEN</a>
                                                    <a className='dropdown-item' href='/'>WOMEN</a>
                                                    <a className='dropdown-item' href='/'>VIEW ALL</a>
                                                </div>
                                            </li>
                                            </ul>
                                            <a className='navbar-brand  ' href='/'>
                                                <img src={require('../images/dealuxeKart.png')} alt='' className='d-inline-block align-top' />
                                            </a>
                                            <ul className='navbar-nav  '>
                                                <li className='nav-item active'>
                                                    <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                                </li>
                                                <li className='nav-item'>
                                                    <a className='nav-link' href='/'>Buyer</a>
                                                </li>
                                                <li className='nav-item'>
                                                    <a className='nav-link' href='/signin'>Seller</a>
                                                </li>
                                                <li className='nav-item'>
                                                    <a className='nav-link' href='/'>Orders</a>
                                                </li>

                                                <button type="button" class="btn btn-default btn-lg">
                                                    <span class="glyphicon glyphicon-shopping-cart"></span></button>

                                                <li className='nav-item'>
                                                    <a className='nav-link' href='/logout'>Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </React.Fragment>
                           
                        );

                    }
                    else {
                        return (
                            <React.Fragment>
                            <nav className='navbar navbar-expand-xl fixed-top'>
                                <div className='container-fluid'>
                                <ul className='navbar-nav  '>
                                    <li className='nav-item dropdown'>
                                        <a className='nav-link dropdown-toggle' href='/' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                            SHOP BY CATEGORY </a>
                                        <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                            <a className='dropdown-item' href='/'>MEN</a>
                                            <a className='dropdown-item' href='/'>WOMEN</a>
                                            <a className='dropdown-item' href='/'>VIEW ALL</a>
                                        </div>
                                    </li>
                                    </ul>
                                    <a className='navbar-brand  ' href='/'>
                                        <img src={require('../images/dealuxeKart.png')} alt='' className='d-inline-block align-top' />
                                    </a>
                                    <ul className='navbar-nav  '>
                                        <li className='nav-item active'>
                                            <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className='nav-link' href='/'>Buyer</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className='nav-link' href='/signin'>Seller</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className='nav-link' href='/'>Hot Deals</a>
                                        </li>

                                        <button type="button" class="btn btn-default btn-lg">
                                            <span class="glyphicon glyphicon-shopping-cart"></span></button>

                                        <li className='nav-item'>
                                            <a className='nav-link' href='/signin'>Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </React.Fragment>
                        );

                    }
                }
            }

        </AuthContext.Consumer>
    );
}

export default NavBar; 
