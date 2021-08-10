import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavMenu = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Trips Manager
          </NavbarBrand>
          <NavbarToggler className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
            {isAuthenticated ? (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/create">
                    Create
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark " to="/trips">
                    Trips
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/profile">
                    User Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <LogoutButton />
                </NavItem>
              </ul>
            ) : (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <LoginButton />
                </NavItem>
              </ul>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
