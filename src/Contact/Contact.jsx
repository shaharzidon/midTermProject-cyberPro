import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import "./Contact.css"
import Form from 'react-bootstrap/Form';
import img from './contactimg.jpeg'
import AnimetedPagesUp from '../AnimatedPagesUP';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


function Contact() {
  const navigate = useNavigate();
  const handleOnClickHome= useCallback(() => navigate('/Home', {replace: true}), [navigate]);

  return (
    <AnimetedPagesUp>
    <div className="contribute-contact">
    <div className='left-contant-container'>
        <div className='img-contact'>
            <img className='img' src={img} alt="" width="550" height="480"/>
        </div>
        <div className='contribute-contact-email'>
            <h2 dir='rtl'> צרו איתנו קשר בכתובת המייל: </h2>
            <p > Hakayak@gmail.com</p>
            </div>
        </div>

       
    <div className='side-contact'>

    <Button dir='rtl'  onClick={handleOnClickHome} className='submit-contact-dark'  variant="dark" type='submit' >חזור</Button>
        <form>
            <label for="fname">שם מלא</label>
             <input dir='rtl' type="text" id="fname" name="fname" placeholder='שם מלא...'/>
             <label for="fname">כתובת מייל</label>
             <input dir='rtl' type="text" id="fname" name="fname" placeholder='כתובת מייל...'/>
             <label for="fname">מספר טלפון</label>
             <input dir='rtl' type="text" id="fname" name="fname" placeholder='מספר טלפון...'/>
             <label for="fname" >דבר הפנייה</label>
             <textarea dir='rtl' id="w3review" name="w3review" rows="2" cols="20" placeholder='דבר הפנייה...'>
             </textarea>
                <Button dir='rtl'  onClick={handleOnClickHome} className='submit-contact-dark'  variant="dark" type='submit' >שלח/י פנייה</Button>
        </form>
</div>

<div>
    
</div>
</div>

</AnimetedPagesUp>

  );
}

export default Contact;
