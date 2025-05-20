import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate } from 'react-router-dom';
import {useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function Header()
{
  const user=JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();

  console.log(user.name);
  

  function Logout() {
  localStorage.clear();
  navigate('/register'); // Or wherever you want to redirect
}


    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">

            {
              localStorage.getItem('user-info')?<> <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link></>:<><Link to="/login">Login</Link>
            <Link to="/register">Register</Link></>
            }
           
            
          </Nav>
       
            {
              localStorage.getItem('user-info')?<Nav>
                   <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item onClick={Logout}>Profile</NavDropdown.Item>
            </NavDropdown>
              </Nav>:null
            }
       
          
        </Container>
      </Navbar>
        </div>
    )
}
export default Header