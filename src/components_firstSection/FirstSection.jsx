
import {FaFacebook} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import {MdOutlineAppRegistration} from 'react-icons/md';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './firstSection.css' 
import {animationSlice} from '../animationSlice';

function FirstSection() {
    const navigate = useNavigate();
    const handleOnClickStep1= useCallback(() => navigate('/BookStep1', {replace: true}), [navigate]);
    return (
        <div className='homepage'>
            
        <div className='first-section'></div>
        <div  className='contant-container'>
            <h1 className='text'>שוטו בשביל מים נקיים יותר בישראל</h1> </div>
            <div className='first-section-contant-container-btndiv'>
               <Button className='homebtn1'>עקבו אחרינו בפייסבוק<FaFacebook/></Button> 
              
               <Button className='homebtn2' onClick={()=>{Object.assign(animationSlice, {animationDiraction: "up"});handleOnClickStep1()}} ><h4>קבעו קיאק להתנדבות<MdOutlineAppRegistration/></h4></Button>

                </div>
             

            </div> 
           
            
     
    );
}
export default FirstSection;

