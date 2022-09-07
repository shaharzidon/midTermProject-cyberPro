import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './riverStep1.jpg';
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./book-step4.css"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import React from 'react';






//moda-bootstrapl
function MyVerticallyCenteredModal(props) {


    return (

      <Modal class='modal-step4'
        {...props}
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
            היי ... נקבעה לך קיאק ב... בשעה... 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}> חזרה למסך הבית</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function BookStep4() {
    const [modalShow, setModalShow] = React.useState(false);




    return (
  <div className="step4PageContainer">
      <div className='step4ContanetContainer'>
          {/* back to main page (will add later on) */}
       <div>   <Button variant="dark" className='back' >חזרה</Button></div>
        
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
        <label for="fname">שם פרטי</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="..שם פרטי"/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">שם משפחה</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="..שם משפחה"/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="country">עיר מגורים</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
        <option value="" disabled selected hidden>...מקום מגורים</option>
          <option value="australia">תל אביב</option>
          <option value="canada">אילת</option>
          <option value="usa">חדרה</option>
          <option value="usa">טבריה</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="lname">כתובת מייל</label>
      </div>
      <div class="col-75">
        <input   type="text" id="lname" name="lastname" placeholder="..כתובת מייל"/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">מספר טלפון</label>
      </div>
      <div class="col-75">
        <input   type="text" id="lname" name="lastname" placeholder="..מספר טלפון"/>
      </div>
</div>



<div class="row">
      <div class="col-25">
        <label for="country"> האם יצא לך להשתמש כבר בקיאק</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
        <option value="" disabled selected hidden>...האם יצא לך להשתמש כבר בקיאק</option>
          <option value="australia">כן</option>
          <option value="canada">לא</option>
          
        </select>
      </div>
    </div>
  </form>
  <div>   <Button variant="success" className='next' onClick={() => setModalShow(true)}>המשך</Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
  </div>
</div>










      </div>

      </div>
        
         );
        }
        
        export default BookStep4;