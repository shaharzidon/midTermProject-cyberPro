import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import "./Contact.css"
import Form from 'react-bootstrap/Form';


function Contact() {
   
  return (
    
  
    <div className="contribute-contact">
    <div className='left-contant-container'>
        <div className='img-contact'>
            <img src="" alt="" width="100" height="100"/>
        </div>
        <div className='contribute-contact-email'>
            <h2 dir='rtl'> צרו איתנו קשר בכתובת המייל: </h2>
            <p > Hakayak@gmail.com</p>
            </div>
        </div>

    <div className='side-contact'>


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
                <Button dir='rtl' className='submit-contact-dark'  variant="dark" type='submit' >שלח/י פנייה</Button>
        </form>
</div>

<div>
    
</div>
</div>

  );
}

export default Contact;
