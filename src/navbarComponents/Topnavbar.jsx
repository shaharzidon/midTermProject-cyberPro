import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import Button from 'react-bootstrap/Button';
import logo from './newlogo.png';

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
        </Container>
      </Navbar>    <div className='volunteerbtn'><Button className='volunteerbtn' >הירשמו להתנדבות <MdOutlineAppRegistration/></Button>
          <Button className='volunteerbtn' >תרמו לנו <FaHeart/></Button></div>

   {/* hamburger */}
  <nav role="navigation" class="hamburgerNav">
    <div id="menuToggle">
     
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    
      <ul id="menu">
        <a href="#home"><li>עלינו</li></a>
        <a href="#about"><li>שאלות ותשובות</li></a>
        <a href="#services"><li>צרו קשר</li></a>
        <a href="#services"><li>הירשמו להתנדבות <MdOutlineAppRegistration/></li></a>
        <a href="#services"><li>תרמו לנו <FaHeart/></li></a>
      </ul>
    </div>
  </nav>
          </div>
 
     
    </>
  );
}

export default MainNav;