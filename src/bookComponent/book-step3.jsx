// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import { Button } from "react-bootstrap";
// import logo from './riverStep1.jpg';
// import "./book-step3.css"

// import Accordion from 'react-bootstrap/Accordion';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import Card from 'react-bootstrap/Card';
// import 

// // <Card.Img variant="top" src={logo} />



// function BookStep3() {
//     function ContextAwareToggle({ children, eventKey, callback }) {
//         const { activeEventKey } = useContext(AccordionContext);
      
//         const decoratedOnClick = useAccordionButton(
//           eventKey,
//           () => callback && callback(eventKey),
//         );
      
//         const isCurrentEventKey = activeEventKey === eventKey;
      
//         return (
//           <button
//             type="button"
//             style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
//             onClick={decoratedOnClick}
//           >
//             {children}
//           </button>
//         );
//       }
      
//   return (
//     // 
//        <div className="step3ContanetContainer">
//         {/* back to main page (will add later on) */}
//      <div>   <Button variant="dark" className='back' >חזרה</Button></div>
      
//       <hr className='hr'></hr>

//       <h2 className='stepHead'> שלב 3 : שעות זמינות</h2>
//       <div className='card_hero'>


//       <Accordion defaultActiveKey="0">
//       <Card>
//         <Card.Header>
//           <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>Hello! I'm the body</Card.Body>
//         </Accordion.Collapse>
//       </Card>
     
//     </Accordion>















//       {/* <Card className='card-container' style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={logo} />
//       <Card.Body>
//         <Card.Title>בחר שעה</Card.Title>
//       </Card.Body>
//       <div className='pick-hour-container'>
//         <Button variant='success'   className='pick-hour'> 10:00 </Button>
//           <Button variant='success'  className='pick-hour'>12:00</Button>
//         </div>
//         <div >
//         <Button variant='success'  className='pick-hour'>14:00</Button >
//         <Button variant='success'  className='pick-hour'>16:00</Button>
//         </div>
//       <Card.Body>
//         <Card.Link href="#">איך להגיע</Card.Link>
//         <Card.Link href="#">שאלות נפוצות</Card.Link>
//       </Card.Body>
//     </Card> */}
//     </div>
//         {/* <div> */}
//         {/* <div  class="card" style={{width:250 , height: 250}}>
//              <img  src={logo}  class="card-img-top" 
  
//             alt="..."/>
//         <div class="card-body">
//             <div className='pick-hour-container'>
//         <Button   className='pick-hour'> back </Button>
//           <Button className='pick-hour'>חדרה</Button>
//         </div>
//         <div >
//         <Button className='pick-hour'>כינרת</Button >
//         <Button className='pick-hour'>אילת</Button>
//         </div>
//         </div>
//   </div> */}
// {/* </div> */}



         
        

   
//       </div>
     
//     /* </div> */

//   );
// }

// export default BookStep3;