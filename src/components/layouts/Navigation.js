import React, {Component,Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar dark color="dark" light expand="sm">
                <div className="container">
                    <NavLink className='navbar-brand' to='/' exact>Home</NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/' exact>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/register'>Register</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Navigation;