import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import { FaCartPlus } from "react-icons/fa";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import '../styles/navbar.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            cartOpen: false,
            cartItems: 0,
            dropdownOpen: false,

        }
    }

    // hanldle sart
    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen });
    };
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <AuthContext.Consumer>
                {
                    user => {
                        if (user) {
                            return (
                                <React.Fragment>
                                    <div>
                                        <Navbar className='navbar navbar-expand-sm fixed-top'>
                                            <NavbarBrand href='/'> <img src={require('../images/dealuxeKart.png')} alt='' className='d-inline-block align-top' /></NavbarBrand>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret>
                                                    SHOP BY CATEGORY
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Hand Bag
                                                     </DropdownItem>
                                                    <DropdownItem>
                                                        Wallets
                                                   </DropdownItem>
                                                    <DropdownItem>
                                                        Shoulder Bag
                                                   </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem href='/viewAll'>
                                                        View All
                                                   </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <NavbarToggler onClick={this.toggle} />
                                            <Collapse isOpen={this.state.isOpen} navbar>
                                                <Nav className="ml-auto" navbar>
                                                    <NavItem>
                                                        <NavLink href="/">Home</NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/">Buyer</NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/signin">Seller</NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/signin">Orders</NavLink>
                                                    </NavItem>
                                                    <Link to='/cart'><button type="button" className="btn btn-default btn-lg">
                                                        <FaCartPlus className="nav-icon" onClick={this.handleCart} />
                                                        <div className="cart-items">{this.cartItems}</div></button></Link>
                                                    <NavItem>
                                                        <NavLink href="/logout">Logout</NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </Collapse>
                                        </Navbar>
                                    </div>
                                </React.Fragment>

                            );

                        }
                        else if (!user) {
                            return (
                                <React.Fragment>
                                    <div>
                                        <Navbar className='navbar navbar-expand-sm fixed-top'>    
                                            <NavbarBrand href='/'> <img src={require('../images/dealuxeKart.png')} alt='' className=' align-top' /></NavbarBrand>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret>
                                                    SHOP BY CATEGORY
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Hand Bag
                                                     </DropdownItem>
                                                    <DropdownItem>
                                                        Wallets
                                                   </DropdownItem>
                                                    <DropdownItem>
                                                        Shoulder Bag
                                                   </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem href='/viewAll'>
                                                        View All
                                                   </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <NavbarToggler onClick={this.toggle} />
                                            <Collapse isOpen={this.state.isOpen} navbar>
                                                <Nav className="ml-auto" navbar>
                                                    <NavItem>
                                                        <NavLink href="/">Home</NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/">Buyer</NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/signin">Seller</NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/signin">Orders</NavLink>
                                                    </NavItem>
                                                    <Link to='/cart'><button type="button" className="btn btn-default btn-lg">
                                                        <FaCartPlus className="nav-icon" onClick={this.handleCart} />
                                                        <div className="cart-items">{this.cartItems}</div></button></Link>
                                                    <NavItem>
                                                        <NavLink href="/signin">Log in</NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </Collapse>
                                        </Navbar>
                                    </div>
                                </React.Fragment>
                            );

                        }
                        else {
                            return (
                                <React.Fragment>
                                    <div className='jumbotron jumbotron-fluid'>
                                        <div className='container'>
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
