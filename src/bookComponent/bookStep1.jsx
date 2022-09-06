import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import "./book-step1.css"


function BookStep1() {
  return (
    <div className="step1PageContainer">
       <div className="step1ContanetContainer">
        {/* back to main page (will add later on) */}
     <div>   <Button variant="dark" className='back' >חזרה</Button></div>
      
      <hr className='hr'></hr>

        
       
      <h2> שלב 1 : איפה תרצו לנקות</h2>
        <div>
          <Button   className="pick-city-btn">תל אביב</Button>
          <Button className="pick-city-btn">חדרה</Button>
        </div>
        <div>
        <Button className="pick-city-btn">כינרת</Button >
        <Button className="pick-city-btn">אילת</Button>
        </div>
        <hr className='hr'></hr>

      </div>
     
    </div>
  );
}

export default BookStep1;
