import {NavLink as ReactLink} from 'react-router-dom';
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
  DropdownItem ,NavbarText} from 'reactstrap';

export default class CustomNavbar extends React.Component {
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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand  tag={ReactLink} to="/">MyBlog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/about" >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={ReactLink} to="/signup">Signup</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/services">
                  Services
                  </DropdownItem>
                  <DropdownItem tag={ReactLink} to="/contacts">
                    Contacts
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/youtube">
                    You Tube
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>You Tube</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}