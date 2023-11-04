import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import {useCart} from 'react-use-cart';
import {ShoppingCart} from 'phosphor-react'
import luxeThreadsLogo from '../webImages/luxeThread-no-background.png'

const NavbarComp = () => {

  const {totalItems} = useCart()

  return (
    <>

<Navbar expand="lg" className="nav bg-body sticky-top ">
      <Container>
        <Navbar.Brand href="/"><img src={luxeThreadsLogo} alt="luxeThreadsLogo"  style={{height:"5vh"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
          <NavLink className="nav-link me-3 prodName nav-active"  style={{color:"rgb(100, 0, 102)"}} to="/">Shop</NavLink>
          <NavLink className="nav-link me-3 prodName nav-active " to="/men" style={{color:"rgb(100, 0, 102)"}}>Men </NavLink>
          <NavLink className="nav-link me-3 prodName nav-active" to="/women" style={{color:"rgb(100, 0, 102)"}}>Women</NavLink>
          <NavLink className="nav-link me-3 prodName nav-active" to="/kids" style={{color:"rgb(100, 0, 102)"}}>Kids</NavLink>
          </Nav>
          <Nav className='ms-auto'>
          {/* <NavLink className="nav-link me-3" to="/login"><User size={25}/></NavLink>  */}
          <NavLink className="nav-link" to="/cart"><ShoppingCart size={25}/>
          <div className="nav-cart-count text-light " style={{width:"22px", height:"22px", backgroundColor:"rgb(100, 0, 102)",  justifyContent:"center", alignItems:"center", borderRadius:"11px", fontSize:"14px", marginTop:"-35px", paddingTop:"1px", paddingLeft:"6px",  marginLeft:"15px"}}>{totalItems}</div> 
          </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavbarComp;
