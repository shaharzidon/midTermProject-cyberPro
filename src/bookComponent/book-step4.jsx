import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './riverStep1.jpg';
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import { useCallback, useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { value} from '../citySlice'
import {dateValue, pickDate,dateSlice} from '../dateSlice'
import { useSelector } from 'react-redux';
import {hourSlice,hourValue} from '../hourSlice'
import { current } from '@reduxjs/toolkit';
import AnimetedPages from '../AnimatedPagesRTL';
import AnimetedPagesLTR from '../AnimatedPagesLTR';
import {animationSlice} from '../animationSlice';
import AnimetedPagesUp from '../AnimatedPagesUP';
import "./book-step4.css"

let name= "שם"


//moda-bootstrapl
function MyVerticallyCenteredModal(props) {
    const navigate = useNavigate();
    const handleOnClickHome= useCallback(() => navigate('/Home', {replace: true}), [navigate]);

    // 
    // 
   
    const date = useSelector((state) =>
    state.date.dateValue)
    const city = useSelector((state) =>
    state.city.value)

    console.log(city ,hourSlice.Step3Hour, dateSlice.Step2Date)

    return ( 

      <Modal class='modal-step4'
        {...props}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton >
          <Modal.Title id= "contained-modal-title-vcenter" >
           נקבעה קיאק בהצלחה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>
        {dateSlice.Step2Date} היי {props.fname} -  קבענו לך קיאק  בשעה {hourSlice.Step3Hour}   - {city}   
          </p>
        </Modal.Body>
        <Modal.Footer>
            
          <Button  dir='rtl' onClick={handleOnClickHome}>  אישור וסיום </Button>{/* props.onHide===> handleOnClickHome changed*/}
          <Button  dir='rtl' onClick={props.onHide}>  אני רוצה לשנות את הפרטים</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function BookStep4() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
    const [modalShow, setModalShow] = React.useState(false);

    const navigate = useNavigate();
    const handleOnClickBack= useCallback(() => navigate('/BookStep3', {replace: true}), [navigate]);
    function firstName(e) {
      setfname(e.target.value.replace(/[^א-ת]/,"" ));
      
  }

  function lastName(e) {
    setlname(e.target.value.replace(/[^א-ת]/,"" ));
    
}



    return (
      <AnimetedPagesLTR>
  <div className="step4PageContainer">
      <div className='step4ContanetContainer'>
          {/* back to main page (will add later on) */}
       <div>   <Button onClick={()=>{Object.assign(animationSlice, {animationDiraction: "left"});handleOnClickBack()}} variant="dark" className='back' >חזרה</Button></div>
        
         <hr className='hr'></hr>
  
         <h2 className='stepHead'> שלב 4 : הכניסו פרטים</h2>

        {/* <div className='input-hero'>    boootstrap version
<span className='input-container'>
    <span>
        <FloatingLabel
        controlId="floatingInput" label="Email address" className="step4-input">
        <Form.Control className="step4-input" type="email" placeholder="name@example.com" />
      </FloatingLabel>

      

      <FloatingLabel
        controlId="floatingInput" label="Email address">
        <Form.Control  className="step4-input" type="email" placeholder="name@example.com" />
      </FloatingLabel>

      


      <FloatingLabel
        controlId="floatingInput" label="Email address">
        <Form.Control  className="step4-input" type="email" placeholder="name@example.com" />
      </FloatingLabel>

      </span>

      <span>
        <FloatingLabel
        controlId="floatingInput" label="Email address">
        <Form.Control  className="step4-input" type="email" placeholder="name@example.com" />
      </FloatingLabel>

      

      <FloatingLabel
        controlId="floatingInput" label="Email address">
        <Form.Control className="step4-input" type="email" placeholder="name@example.com" />
      </FloatingLabel>

      


      <FloatingLabel
        controlId="floatingInput" label="Email address">
        <Form.Control  className="step4-input" type="email" placeholder="name@example.com" />
      </FloatingLabel>

      </span>

      </span>
        </div> */}




<div class="container">
  <form action="">
    <div class="row">
      <div class="col-25">
        <label  className='fname-step4 input-step4' for="fname">שם פרטי</label>
      </div>
      <div class="col-75">
        <input className='input-step4' type="text" id="fname" name="firstname" placeholder="..שם פרטי"value={fname} onChange={(e) => firstName(e)}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label className='input-step4' for="lname">שם משפחה</label>
      </div>
      <div class="col-75">
        <input className='input-step4' type="text" id="lname" name="lastname" placeholder="..שם משפחה" value={lname} onChange={(e) => lastName(e)}/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="country">עיר מגורים</label>
      </div>
      <div class="col-75">
        <input className='input-step4' id="country" type="text" name="country" placeholder='...עיר מגורים'>
        {/* <option value="" disabled inputed hidden>...מקום מגורים</option>
          <option value="australia">תל אביב</option>
          <option value="canada">אילת</option>
          <option value="usa">חדרה</option>
          <option value="usa">טבריה</option> */}
        </input>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="email">כתובת מייל</label>
      </div>
      <div class="col-75">
        <input  className='input-step4'  type="email" id="email" name="email" placeholder="..כתובת מייל"/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label className='input-step4' for="email">מספר טלפון</label>
      </div>
      <div class="col-75">
        <input  className='input-step4'  type="number" id="phone" name="phone" max={10} placeholder="..מספר טלפון"/>
      </div>
</div>



<div class="row">
      <div class="col-25">
        <label for="useage"> האם יצא לך להשתמש כבר בקיאק</label>
      </div>
      <div class="col-75">
        <input  type="text" className='input-step4' id="usage" name="usage" placeholder='כן\לא'>
        {/* <option value="" disabled inputed hidden >...האם יצא לך להשתמש כבר בקיאק</option> */}
          {/* <option value="yes">כן</option>
          <option value="no">לא</option>
           */}
        </input>
      </div>
    </div>
  </form>
  <div>   <Button variant="success" className='next' onClick={() => setModalShow(true)}>המשך33</Button>
            <MyVerticallyCenteredModal fname={fname} show={modalShow} onHide={() => setModalShow(false)} />
  </div>
</div>


      </div>

      </div>


      
      </AnimetedPagesLTR>
        
         );
        }
        
        export default BookStep4;