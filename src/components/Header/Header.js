import React, { useState } from "react";
import "./Header.css";
import logo from "../../logo.png";

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse
} from 'reactstrap';

import { Link, Outlet } from 'react-router-dom';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);




    return (
        <div>
            <Navbar expand="lg" className="navbar_default fixed-top h-auto">
                <NavbarBrand className="titulo" tag={Link} to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="ms-3">

                            <NavLink className="ms-3 me-3" tag={Link} to="/about" onClick={toggle}>

                                About
                            </NavLink>
                        </NavItem>
                        <NavItem className="ms-3">
                            <NavLink className="ms-3 me-3" tag={Link} to="/experience" onClick={toggle}>
                                Experience
                            </NavLink>
                        </NavItem>
                        <NavItem className="ms-3">
                            <NavLink className="ms-3 me-3" tag={Link} to="/portfolio" onClick={toggle}>
                                Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem className="ms-3">
                            <NavLink className="ms-3 me-3" tag={Link} to="/contacts" onClick={toggle}>
                                Contacts
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Outlet />
        </div>
    );
}
