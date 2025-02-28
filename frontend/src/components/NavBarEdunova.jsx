import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../constants';



export default function NavBarEdunova(){

    const navigate = useNavigate();


    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand 
                className='ruka'
                onClick={()=>navigate(RouteNames.HOME)}
                >TipoviAuta</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <NavDropdown title="Programi" id="basic-nav-dropdown">
                    <NavDropdown.Item 

                    onClick={()=>navigate(RouteNames.PROIZVODJAC_PREGLED)}
                    
                    >Prizvođači</NavDropdown.Item>

                    <NavDropdown.Item
                    onClick={()=>navigate(RouteNames.VRSTAAUTA_PREGLED)}
                    >Vrste Auta</NavDropdown.Item>
                   
                    </NavDropdown>
                    <Nav.Link href='https://rmateasic-001-site1.ntempurl.com/swagger' target='_blank'>Swagger</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}