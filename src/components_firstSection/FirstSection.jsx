import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import {MdOutlineAppRegistration} from 'react-icons/md';


import './firstSection.css' 

function FirstSection() {
    return (
        <div className='homepage'>
            
        <div className='first-section'></div>
        <div  className='contant-container'>
            <h1 className='text'>שוטו בשביל מים נקיים יותר בישראל</h1> </div>
            <div className='btndiv'>
               <Button className='homebtn1'>עקבו אחרינו בפייסבוק<FaFacebook/></Button> 
              
               <Button className='homebtn2' ><h4>קבעו קיאק להתנדבות<MdOutlineAppRegistration/></h4></Button>

                </div>
             

            </div> 
           
            
     
    );
}
export default FirstSection;

