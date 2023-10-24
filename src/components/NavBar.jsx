import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notificacion from './CartWidget';
import './NavBar.css';
import Logo from './Logo';


const Barranav = () => {
    return (
        <>
            <Navbar expand="lg" className="barra-gral">
                <Container className="barra ">
                    <Navbar.Brand href="/" className='barra-brand'>Gaming Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Logo />
                        <Nav className="me-auto">
                            <Nav.Link href="/"><h6 className='nav-titles'>Home</h6></Nav.Link>
                            <Nav.Link href="/ItemlistContainer"><h6 className='nav-titles'>Productos</h6></Nav.Link>
                            <Nav.Link href="/cart" className='cart-wid'><h6><Notificacion /></h6></Nav.Link>

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Barranav;