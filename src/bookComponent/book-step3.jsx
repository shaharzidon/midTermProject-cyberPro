import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useCallback, useContext } from 'react';
import { AccordionContext } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hadera from './hadera.jpg';
import kinert from './kinert.webp';
import eylat from './eylat.jpg';
import telaviv from './telaviv.jpg';


import { Button } from "react-bootstrap";

import { Link, useNavigate } from 'react-router-dom';
import { value} from '../citySlice'
import {dateValue, pickDate,dateSlice} from '../dateSlice'
import { useSelector } from 'react-redux';
import {hourSlice,hourValue} from '../hourSlice'
import {animationSlice} from '../animationSlice';
import AnimetedPagesLTR from '../AnimatedPagesLTR';
import AnimetedPagesRTL from '../AnimatedPagesRTL';
// import { HashLink as Link } from 'react-router-hash-link';

import "./book-step3.css"


function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);




  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
     
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function BookStep3() {

  // console.log(dateSlice.Step2Date)
  // console.log(date1)
  const city = useSelector((state) =>state.city.value)

  const navigate = useNavigate();
  const handleOnClick10= useCallback(() => navigate('/BookStep4', {replace: true}), [navigate]);
  const handleOnClick12= useCallback(() => navigate('/BookStep4', {replace: true}), [navigate]);
  const handleOnClick14 = useCallback(() => navigate('/BookStep4', {replace: true}), [navigate]);
  const handleOnClick16 = useCallback(() => navigate('/BookStep4', {replace: true}), [navigate]);
  const handleOnClickHome= useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
  const handleMap= useCallback(() => navigate('/Mapsection', {replace: true}), [navigate]);
  const handleFaq= useCallback(() => navigate('/Faq', {replace: true}), [navigate]);
  console.log(animationSlice.animationDiraction+"00000--------")

    
  function setAnimationDiractionR()
  {
    Object.assign(animationSlice, {animationDiraction: "right"})
    console.log("step3right")
    console.log(animationSlice.animationDiraction+"00000--------")
  }
  function setAnimationDiractionL()
  {
    Object.assign(animationSlice, {animationDiraction: "left"})
    console.log("leftfunmeow3")
    console.log(animationSlice.animationDiraction+"00000--((((------")
  }

  console.log(animationSlice.animationDiraction+"00000--------")



  console.log(animationSlice.animationDiraction+"00000--------")
   if(animationSlice.animationDiraction=="right")
  return (
    
    <AnimetedPagesLTR>
     
<div className="step3ContanetContainer">
        {/* back to main page (will add later on) */}
     <div>   <Button onClick={()=>{handleOnClickHome();setAnimationDiractionL()}} variant="dark" className='back' >חזרה</Button></div>
      
    

      <h2 className='stepHead'> שלב 3 : שעות זמינות</h2>
      {/* <span>
      
      <input className='step3-qua' type="number" id="quantity" name="quantity" min="1" max="3"/>
      <label className='step3-qua' for="quantity">?כמה אתם</label>
      </span> */}
     
   
     <Card className='card-container' >
        <Card.Header>
       
          <ContextAwareToggle eventKey="0"><Card.Img variant="top" src={city=="כינרת" ? kinert  : city=="תל אביב" ? telaviv : city=="אילת" ? eylat : hadera}/>{dateSlice.Step2Date}</ContextAwareToggle>
          <Card.Title>בחר שעה</Card.Title>
        </Card.Header>
       
        <Card.Body>
        <div className='pick-cont'>
        <Button  onClick={()=>{setAnimationDiractionR();handleOnClick10();Object.assign(hourSlice, {Step3Hour: "10:00"});}}  variant='success'   className='pick-hour'> <div className='hour-div'>10:00 </div></Button>
          <Button   onClick={()=>{setAnimationDiractionR();handleOnClick12();Object.assign(hourSlice, {Step3Hour: "12:00"});}} variant='success'  className='pick-hour'><div className='hour-div'>12:00 </div></Button>
        </div>
        <div >
        <Button   onClick={()=>{setAnimationDiractionR();handleOnClick14();Object.assign(hourSlice, {Step3Hour: "14:00"});}} variant='success'  className='pick-hour'><div className='hour-div'>14:00 </div></Button >
        <Button   onClick={()=>{setAnimationDiractionR();handleOnClick16();Object.assign(hourSlice, {Step3Hour: "16:00"});}} variant='success'  className='pick-hour'><div className='hour-div'>16:00 </div></Button>
        </div>
        <div>
      <span className='links'>
        <Card.Link href="#">  <Link to="Mapsection" style={{textDecoration: 'none'} } onClick =  {()=>{(handleMap())}}>איך להגיע </Link></Card.Link>
        </span>
        <span className='links'>
        <Card.Link href="#" onClick =  {()=>{(handleFaq())}}>שאלות נפוצות</Card.Link>
        </span>
        </div>
      </Card.Body>
       
      </Card>
      
    
    <div className='line-step3'></div>
    <h2 className='step3-h2'> בחרו שעה בה תרצו לקבוע קיאק </h2>
    </div>
    </AnimetedPagesLTR>
  );

         return (
    <AnimetedPagesRTL>
<div className="step3ContanetContainer">
        {/* back to main page (will add later on) */}
     <div>   <Button onClick={()=>{handleOnClickHome();setAnimationDiractionL()}} variant="dark" className='back' >חזרה</Button></div>
      
    

      <h2 className='stepHead'> שלב 3 : שעות זמינות</h2>
      {/* <span>
      
      <input className='step3-qua' type="number" id="quantity" name="quantity" min="1" max="3"/>
      <label className='step3-qua' for="quantity">?כמה אתם</label>
      </span> */}
     
   
     <Card className='card-container' >
        <Card.Header>
       
          <ContextAwareToggle eventKey="0"><Card.Img variant="top" src={city=="כינרת" ? kinert  : city=="תל אביב" ? telaviv : city=="אילת" ? eylat : hadera}/>{dateSlice.Step2Date}</ContextAwareToggle>
          <Card.Title>בחר שעה</Card.Title>
        </Card.Header>
       
        <Card.Body>
        <div className='pick-cont'>
        <Button  onClick={()=>{setAnimationDiractionR();handleOnClick10();Object.assign(hourSlice, {Step3Hour: "10:00"});}}  variant='success'   className='pick-hour'> <div className='hour-div'>10:00 </div></Button>
          <Button   onClick={()=>{setAnimationDiractionR();handleOnClick12();Object.assign(hourSlice, {Step3Hour: "12:00"});}} variant='success'  className='pick-hour'><div className='hour-div'>12:00 </div></Button>
        </div>
        <div >
        <Button   onClick={()=>{setAnimationDiractionR();handleOnClick14();Object.assign(hourSlice, {Step3Hour: "14:00"});}} variant='success'  className='pick-hour'><div className='hour-div'>14:00 </div></Button >
        <Button   onClick={()=>{setAnimationDiractionR();handleOnClick16();Object.assign(hourSlice, {Step3Hour: "16:00"});}} variant='success'  className='pick-hour'><div className='hour-div'>16:00 </div></Button>
        </div>
        <div>
      <span className='links'>
        <Card.Link href="#">  <Link to="Mapsection" style={{textDecoration: 'none'} } onClick =  {()=>{(handleMap())}}>איך להגיע </Link></Card.Link>
        </span>
        <span className='links'>
        <Card.Link href="#" onClick =  {()=>{(handleFaq())}}>שאלות נפוצות</Card.Link>
        </span>
        </div>
      </Card.Body>
       
      </Card>
      
    
    <div className='line-step3'></div>
    <h2 className='step3-h2'> בחרו שעה בה תרצו לקבוע קיאק </h2>
    </div>
    </AnimetedPagesRTL>
  );
}

