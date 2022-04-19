import './Navibar.css';
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const AdminLogNavibar = ()=>{
    return(
        
         <div>
            
            <Navbar className="color-nav" variant="dark" expand="lg">
               <Container>
                  <Navbar.Brand>VIS</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto"style={{justifyContent:"end", marginLeft:"68vw"}}>
                     <Nav.Link href="/Admin/login">Logout</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
    
    )
}