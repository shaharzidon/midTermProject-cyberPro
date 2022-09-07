import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AccordionContext } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './riverStep1.jpg';
import { Button } from "react-bootstrap";
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

function BookStep3() {
  return (
<div className="step3ContanetContainer">
        {/* back to main page (will add later on) */}
     <div>   <Button variant="dark" className='back' >חזרה</Button></div>
      
      <hr className='hr'></hr>

      <h2 className='stepHead'> שלב 3 : שעות זמינות</h2>
      <span>
      
      <input type="number" id="quantity" name="quantity" min="1" max="3"/>
      <label for="quantity">?כמה אתם</label>
      </span>
    <Accordion defaultActiveKey="0">
     <Card className='card-container' style={{ width: '18rem' }}>
        <Card.Header>
       
          <ContextAwareToggle eventKey="0"><Card.Img variant="top" src={logo} /></ContextAwareToggle>
          <Card.Title>בחר שעה</Card.Title>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
        <div className='pick-hour-container'>
        <Button variant='success'   className='pick-hour'> 10:00 </Button>
          <Button variant='success'  className='pick-hour'>12:00</Button>
        </div>
        <div >
        <Button variant='success'  className='pick-hour'>14:00</Button >
        <Button variant='success'  className='pick-hour'>16:00</Button>
        </div>
        <div>
      <span className='links'>
        <Card.Link href="#">איך להגיע</Card.Link>
        </span>
        <span className='links'>
        <Card.Link href="#">שאלות נפוצות</Card.Link>
        </span>
        </div>
      </Card.Body>
        </Accordion.Collapse>
      </Card>
      
    </Accordion>
    </div>
  );
}

export default BookStep3;