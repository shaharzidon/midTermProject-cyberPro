import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import Button from 'react-bootstrap/Button';
import logo from './mainlogo.png';

import {FaHeart} from 'react-icons/fa';
import {MdOutlineAppRegistration} from 'react-icons/md';

function MainNav() {
  return (
    <>
     <div className="mainnav">
      <Navbar > <img className='logo' src={logo} width={160} height={100}></img>
        <Container>
          <Nav className="nav">
            <span>
            <Nav.Link href="#home">עלינו</Nav.Link>
            </span> <span>
            <Nav.Link href="#features">שאלות ותשובות</Nav.Link>
            </span>
            <span>
            <Nav.Link href="#pricing">צרו קשר</Nav.Link>
            </span>
          
          </Nav>
          <Button className='volunteerbtn' >הירשמו להתנדבות <MdOutlineAppRegistration/></Button>
          <Button className='volunteerbtn' >תרמו לנו <FaHeart/></Button>
          {/* <Button variant="outline-drak">תרמו למיזם</Button>{' '} */}
        </Container>
      </Navbar>    
       
       
      </div>
 
     
    </>
  );
}

export default MainNav;