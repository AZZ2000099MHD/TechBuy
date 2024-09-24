import {Navbar, Nav,Container} from "react-bootstrap";
import {FaCartShopping, FaUser} from "react-icons/fa6";

const Header = ()=>{

    return (
        <>
        <header>
            <Navbar bg={'dark'} variant={'dark'} expand={'sm'} collapseOnSelect>

                <Container>
                    <Navbar.Brand href={'/'} > TechBuy</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>

                    </Navbar.Collapse>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart' > <FaCartShopping/> Cart </Nav.Link>
                            <Nav.Link href='/login' > <FaUser/> User </Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </header>

        </>
    )
}


export default  Header;