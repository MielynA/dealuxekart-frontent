import React from 'react';
// import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import { FaBars, FaCartPlus } from "react-icons/fa";
//import ProdListContext from '../contexts/prodList';
//import addToCart from './addToCart';

import '../styles/navbar.css';


class NavBar extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            cart: [],
            sidebarOpen: false,
            cartOpen: false,
            cartItems: 0,

        }
    }

    // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // hanldle sart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
    render() {
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
                                               
                                                <button type="button" className="btn btn-default btn-lg" onClick={this.handleSideBar}> 
                                                    <span className="glyphicon glyphicon-shopping-cart"><FaCartPlus className="nav-icon" onClick={this.handleCart} />
                                                      <div className="cart-items">{this.cartItems}</div></span></button>

                                                <li className='nav-item'>
                                                    <a className='nav-link' href='/logout'>Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </React.Fragment>
                           
                        );

                    }
                    else if(!user) {
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
                                            <a className='dropdown-item' href='/viewAll'>VIEW ALL</a>
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

                                        <button type="button" className="btn btn-default btn-lg">
                                            <span className="glyphicon glyphicon-shopping-cart"></span></button>

                                        <li className='nav-item'>
                                            <a className='nav-link' href='/signin'>Login</a>
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
                                 <div className = 'jumbotron jumbotron-fluid'>
                                      <div className = 'container'>
        
                                   <h2 className='display-4 text-center'>You are not Logged in</h2>
                                   </div>
                                   </div>
                            </React.Fragment>
                        );
                    }
                }
            }

        </AuthContext.Consumer>
    );
   }
}

export default NavBar; 
