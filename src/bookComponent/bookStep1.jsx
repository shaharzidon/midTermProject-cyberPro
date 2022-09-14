import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import hadera from './hadera.jpg';
import kinert from './kinert.webp';
import eylat from './eylat.jpg';
import telaviv from './telaviv.jpg';

import { useSelector, useDispatch } from 'react-redux'
import { value, setTelAviv, setHeifa, setTveria,setEylat  } from '../citySlice'
import AnimetedPages from '../AnimatedPagesRTL';
import {animationSlice} from '../animationSlice';
import AnimetedPagesUp from '../AnimatedPagesUP';
import AnimetedPagesLTR from '../AnimatedPagesLTR';
import AnimetedPagesRTL from '../AnimatedPagesRTL';
import { Button } from "react-bootstrap";
import "./book-step1.css"

function BookStep1() {

  const city = useSelector(value)
  const dispatch = useDispatch()

 

 const navigate = useNavigate();
  const handleOnClickHome= useCallback(() => {navigate('/Home', {replace: true})}, [navigate]);
    const handleOnClickTelAviv= useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
    const handleOnClickTveria= useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
    const handleOnClickHeifa = useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
    const  handleOnClickEylat=  useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
    
   
      const setAnimationDiractionR= () =>
    {
       Object.assign(animationSlice, {animationDiraction: "right"})
      // console.log("righttfunctmeow"+animationSlice.animationDiraction)
    
}
      if(animationSlice.animationDiraction=="left")
  return (
    <AnimetedPagesRTL>
<div className=''>
  <div className='line-step1'></div>
  <h4 className='step1-h4'> בחר היכן תרצה לשוט</h4>
  <div > <Button className="back-step1" onClick={handleOnClickHome}  variant="dark" >חזרה</Button></div>
<div class="step4-contant-container">

  <span className='span-step1'>     
       <div class="box box-1">
            <div class="cover"><img src= {telaviv}  className='img-step1' alt="" onClick={() => { localStorage.setItem('city', 'תל אביב');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickTelAviv(); dispatch(setTelAviv());}}/><div>תל אביב</div></div>
            
        </div>
        <div class="box box-2">
            <div class="cover"><img  src={kinert} alt=""  className='img-step1' onClick={() => {localStorage.setItem('city', 'כינרת');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickTveria(); dispatch(setTveria());}}/> <div>כינרת</div></div>
            </div>

        </span>
        <span className='span-step1'>
        <div class="box box-3">
            <div class="cover"><img src={eylat} alt=""  className='img-step1'onClick={() => {localStorage.setItem('city', 'אילת');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickEylat(); dispatch(setEylat());}}/> <div>אילת</div></div>
           
        </div>
        <div class="box box-4">
            <div class="cover"><img src={hadera} alt=""  className='img-step1'  onClick={() => {localStorage.setItem('city', 'כינרת');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickTveria(); dispatch(setTveria());}}/><div>חדרה</div></div>
           
        </div>
        </span>
        <h1 className='step1-h1'>הצטרפו אלינו למען עתיד צלול ונקי יותר</h1>
    </div>



</div>

     </AnimetedPagesRTL>
  );

    else
     return(
      <AnimetedPagesUp>
    <div className='step1-mainContainer'>
  <div className='line-step1'></div>
  <h4 className='step1-h4'>1 בחר היכן תרצה לשוט</h4>
  <div > <Button className="back-step1" onClick={handleOnClickHome}  variant="dark" >חזרה</Button></div>
<div class="step4-contant-container">

  <span className='span-step1'>     
       <div class="box box-1 firstimgs-step1">
            <div class="cover "><img src= {telaviv}  className='img-step1  ' alt="" onClick={() => { localStorage.setItem('city', 'תל אביב');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickTelAviv(); dispatch(setTelAviv());}}/><div>תל אביב</div></div>
            
        </div>
        <div className='toHide'></div>
        <div class="box box-2 secimg-step1">
            <div class="cover"><img  src={kinert} alt=""  className='img-step1  ' onClick={() => {localStorage.setItem('city', 'כינרת');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickTveria(); dispatch(setTveria());}}/> <div>כינרת</div></div>
            </div>
            
        </span>
        <span className='span-step1 secspan_step1'>

        <div class="box box-3 firstimgs-step1" >
            <div class="cover "><img src={eylat} alt=""  className='img-step1  'onClick={() => {localStorage.setItem('city', 'אילת');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickEylat(); dispatch(setEylat());}}/> <div>אילת</div></div>
           
        </div>
        <div className='toHide'></div>
        <div class="box box-4 secimg-step1">
            <div class="cover '"><img src={hadera} alt=""  className='img-step1 '   onClick={() => {localStorage.setItem('city', 'חדרה');Object.assign(animationSlice, {animationDiraction: "right"});handleOnClickHeifa(); dispatch(setHeifa());}}/><div>חדרה</div></div>
           
        </div>
        </span>
        <h1 className='step1-h1'>הצטרפו אלינו למען עתיד צלול ונקי יותר</h1>
    </div>



</div>
      </AnimetedPagesUp>
    );
}

export default BookStep1;