import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import "./Contribute.css"
import Form from 'react-bootstrap/Form';


function Contribute() {
   
  return (
    
  
    <div className="contribute-container">
    <div className='side-container'>

<div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">
      <div className='personal-info'>
        <div class="row">
          <div class="col-50">
            <h3 className='head'>פרטים אישיים</h3>
            <hr className='hr1'></hr>
            <label for="fname"><i class="fa fa-user"></i> שם מלא</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> כתובת מייל</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> כתובת</label>
            <input type="text" id="adr" name="address" placeholder="...כתובת"/>
            {/* <label for="city"><i class="fa fa-institution"></i> עיר מגורים</label>
            <input type="text" id="city" name="city" placeholder="...עיר מגורים"/> */}

            <div class="row">
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="...4961999"/>
              </div>
            </div>
          </div>
          </div>
<div className='pay-info'>
          <div class="col-50">
            <h3 className='head'>פרטי תשלום</h3>
            <hr className='hr2'></hr>
            {/* <label for="fname">Accepted Cards</label> שחר שמות של לוגו
            <div class="icon-container">
              <i class="fa fa-cc-visa"></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard"></i>
              <i class="fa fa-cc-discover"></i>
            </div> */}
            <label for="cname">שם על הכרטיס</label>
            <input type="text" id="cname" name="cardname" placeholder="יוסי יוסי"/>
            <label for="ccnum">מספר כרטיס אשראי</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">תאריך תפוגת הכרטיס</label>
            <div class="row">
            <div class="col-50">
                <div className='sel'>
        <select id="country" name="country">
        <option disabled selected value="">... תאריך תפוגה</option>
          <option value="australia">1</option>
          <option value="canada">2</option>
          <option value="usa2">3</option>
          <option value="usa3">4</option>
          <option value="usa4">5</option>
          <option value="usa5">6</option>
          <option value="usa6">7</option>
          <option value="usa7">8</option>
          <option value="usa8">9</option>
          <option value="usae">10</option>
          <option value="usaee">11</option>
          <option value="us3a">12</option>
        </select>
        </div>

      </div>
      </div>
            <div class="row">
              <div class="col-50">
             
              </div>
              <div class="col-50 cvv">
                <label  class="cvv1"  for="cvv">CVV</label>
                <input class="cvv2" type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          </div>
        </div>
      
      </form>
      <input type="submit" value=" אישור והמשך" class="btn"/>
    </div>
  </div>
</div>

</div>
<div className='right-text'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel tenetur fuga quibusdam? Provident ea quod voluptas enim qui, amet quibusdam a perferendis nam nemo excepturi molestiae impedit minus culpa.
</div>

</div>


  );
}

export default Contribute;
