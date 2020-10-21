import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../assets/images/Logo.png';
import iconSearch from '../../assets/icons/search.svg';
import CartWidget from '../CartWidget/CartWidget';


function NavbarComponent(){
    return  <>
    <Navbar expand="lg" className="main-navbar fixed-top">
    <div className="container">
        <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-3">
            <Nav.Link href="#home">Mujer</Nav.Link>
            <Nav.Link href="#link">Hombre</Nav.Link>
            <Nav.Link href="#home">Niños</Nav.Link>
            <Nav.Link href="#link">Marcas</Nav.Link>
        </Nav>
        <Form inline>
            <Form.Label htmlFor="formSearch" srOnly>
                Buscar
            </Form.Label>
            <InputGroup className="mr-2">
                <InputGroup.Prepend>
                <InputGroup.Text><img src={iconSearch} className="search-icon"></img></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="formSearch" placeholder="Buscar" />
            </InputGroup>
        </Form>
        <CartWidget />
        </Navbar.Collapse>
    </div>
  </Navbar>
  </>
}

export default NavbarComponent;