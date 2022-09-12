import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import Button from 'react-bootstrap/Button';
import logo from './finallogo.png';

import {FaHeart} from 'react-icons/fa';
import {MdOutlineAppRegistration} from 'react-icons/md';
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link,Outlet } from "react-router-dom";
import OurStory from '../component_ourStory/OurStory';
import {animationSlice} from '../animationSlice';

function MainNav() {
  const navigate = useNavigate();
  const handleOnClickContribute = useCallback(() => navigate('/contribute', {replace: true}), [navigate]);
  const handleOnClickOurStory = useCallback(() => navigate('/OurStory', {replace: true}), [navigate]);
  const handleOnClickStep1= useCallback(() => navigate('/bookStep1', {replace: true}), [navigate]);
  const handleOnClickFaq= useCallback(() => navigate('/Faq', {replace: true}), [navigate]);
  const handleOnClickContact= useCallback(() => navigate('/contact', {replace: true}), [navigate]);

  return (
    <>
     <div className="mainnav">
      <Navbar > <img className='logo' src={logo} width={120} height={100}></img>
        <Container>
          <Nav className="nav">
            <span>
            <Nav.Link onClick={handleOnClickOurStory} > עלינו </Nav.Link>
            </span>
            <span>
            <Nav.Link onClick={handleOnClickContact} > צרו קשר </Nav.Link>
            </span>
            <span>
            <Nav.Link onClick={handleOnClickFaq} > שאלות ותשובות</Nav.Link>
            </span>
          
          </Nav>
        </Container>
      </Navbar>    <div className='volunteerbtn' ><Button className='volunteerbtn' onClick={()=>{Object.assign(animationSlice, {animationDiraction: "up"});handleOnClickStep1()}} >הירשמו להתנדבות <MdOutlineAppRegistration/></Button>
          <Button className='volunteerbtn'  onClick={handleOnClickContribute}>תרמו לנו <FaHeart/></Button></div>

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