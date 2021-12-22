import React from 'react';
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
  DropdownItem } from 'reactstrap';
  import './Navbar.css';
  import { Link } from "react-router-dom";
  import Logo from '../Images/logo.svg';

export default class Navigation extends React.Component {
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
      <div>
        <Navbar className="twtBg" expand="md" fixed>
          <div className="container">
          <NavbarBrand href="/">
            <img src={Logo} alt={Logo} className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Login</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src="https://statinfer.com/wp-content/uploads/dummy-user.png" className="pp" />
                </DropdownToggle>
                {/* <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/userprofile">User Profile</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/creatorprofile">Creator Profile</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/curatorprofile">Curator Profile</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/advertiserprofile">Advertiser Profile</Link>
                  </DropdownItem>
                </DropdownMenu> */}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
        </Navbar>
      </div>
    );
  }
}