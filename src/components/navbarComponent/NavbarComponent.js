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
import { Link } from 'react-router-dom';


function NavbarComponent(){
    const categories = [
        { id:"mujer", name:"Mujer" }, 
        { id:"hombre", name:"Hombre" },  
        { id:"niños", name:"Niños" }, 
    ];
    
    return  <>
    <Navbar expand="lg" className="main-navbar fixed-top">
    <div className="container">
        <Link to="/"><Navbar.Brand><img src={logo}></img></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-3">
            {categories.map( cat => {
             return <Nav.Link><Link to={`/category/${cat.id}`} key={cat.id}> {cat.name} </Link></Nav.Link>
            } )}
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
        <Link to="/cart"><CartWidget /></Link>
        </Navbar.Collapse>
    </div>
  </Navbar>
  </>
}

export default NavbarComponent;