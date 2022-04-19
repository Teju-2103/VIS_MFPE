import './Navibar.css';
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const Navibar = ()=>{
    return(
        
         <div>
            
            <Navbar className="color-nav" variant="dark" expand="lg">
               <Container>
                  <Navbar.Brand>VIS</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/about">About</Nav.Link>
                     <Nav.Link href="/User/login">Login</Nav.Link>
                     <Nav.Link href="/Admin/login">Admin Login</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
    
    )
}