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
        <div>
            <h2> contact us at :</h2>
            <p> skdqwe@gmail.com</p>
            </div>
        </div>

    <div className='side-contact'>


        <form>
            <label for="fname">שם מלא</label>
             <input type="text" id="fname" name="fname" placeholder='...שם מלא'/>
             <label for="fname">כתובת מייל</label>
             <input type="text" id="fname" name="fname" placeholder='...כתובת מייל'/>
             <label for="fname">מספר טלפון</label>
             <input type="text" id="fname" name="fname" placeholder='...מספר טלפון'/>
             <label for="fname">דבר הפנייה</label>
             <textarea  id="w3review" name="w3review" rows="2" cols="20" placeholder='...דבר הפנייה'>
             </textarea>
                <Button className='submit-contact dark'  variant="dark" type='submit'> שלח פנייה</Button>
        </form>
</div>

<div>
    
</div>
</div>

  );
}

export default Contact;
