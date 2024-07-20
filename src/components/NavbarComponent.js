import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart4 } from "react-icons/bs";
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarComponent = () => {
  const items = useSelector((state) => state.cart.items)
  const totalQuantity = items.reduce((total,item)=>{
    return total = total + parseInt(item.quantity);
  },0)
  return (
    <div className='sticky-navbar'>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <Link to='/ecommerceapp' className='no-underline'><Navbar.Brand href="#home">Ecommerce</Navbar.Brand></Link> 
          <Nav className="me-auto">
           <Link to='/todaysdeal' className='no-underline'> <Nav.Link href="#home" className='mx-5'>Today's Deals</Nav.Link></Link>
            <Nav.Link href="#features" className='mx-4'>Gift Cards</Nav.Link>
            <Nav.Link href="#pricing" className='mx-4'>Registry</Nav.Link>
            </Nav>
            <Link to='/cart'>
            <Nav className='ms-auto'><BsCart4 className='fs-4 pr-1' /> Cart ({totalQuantity})</Nav>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
