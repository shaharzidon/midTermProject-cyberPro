import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { value} from '../citySlice'
import {dateValue, pickDate,dateSlice} from '../dateSlice'
import AnimetedPages from '../AnimatedPagesRTL';
import {animationSlice} from '../animationSlice';
import AnimetedPagesUp from '../AnimatedPagesUP';
import AnimetedPagesLTR from '../AnimatedPagesLTR';
import AnimetedPagesRTL from '../AnimatedPagesRTL';
import "./book-step2.css"
function BookStep2() {

    const navigate = useNavigate();
    const handleOnClickDate= useCallback(() => navigate('/BookStep3', {replace: true}), [navigate]);
    const   handleOnClickHome= useCallback(() => navigate('/BookStep1', {replace: true}), [navigate]);
   
    // console.log(cityLocal+"lasldlalalsdlasdldllasdl")
    const city = useSelector((state) =>
    state.city.value)
    const cityLocal = localStorage.getItem('date');


    const date1 = useSelector((state) =>
    state.date.dateValue)
    // useDispatch(pickDate("aa"))
    // Object.assign(dateSlice, b);
// dateSlice=a;

    // console.log(dateSlice)
    const arr = []
    let myDate = new Date();
    let arrDay=[]
    function addDate(){
        
        console.log("runs")
        for(let i=1;i<=14;i++)
        {
            
           let temp= (myDate.getTime()+(i*24*60*60*1000));
            let date = new Date(temp);

            arr.push(date)


            if(date.getDay()==0)
                arrDay.push("ראשון")
             else if(date.getDay()==1)  
                 arrDay.push("שני")
            else if(date.getDay()==2)  
                 arrDay.push("שלישי")
             else if(date.getDay()==3)  
                 arrDay.push("רביעי")
             else if(date.getDay()==4)  
                 arrDay.push("חמישי")
            else if(date.getDay()==5)  
                 arrDay.push("שישי")
            else 
                 arrDay.push("שבת")

    }
    }


    addDate()
    
    function setAnimationDiractionR()
    {
      Object.assign(animationSlice, {animationDiraction: "right"})
      console.log("righttfunctmeow"+animationSlice.animationDiraction)
    }
    function setAnimationDiractionL()
    {
      Object.assign(animationSlice, {animationDiraction: "left"})
      console.log("leftfunctmeow")
    }



// for(let i =0; i<arr.length;i++)
// console.log(`${ arr[i].getDate()+ "/" +(arr[i].getMonth()+1)}`)
    // useEffect(() => {
    //     console.log('hi');
    //     // Update the document title using the browser API
       
    //   });
    console.log(animationSlice.animationDiraction+"------step2")
    if(animationSlice.animationDiraction=="right")
    
  return (
    <AnimetedPagesLTR>
<div className="step2PageContainer">
        
        <div className='step2ContanetContainer'>
     
          <Button onClick={()=>{setAnimationDiractionL();handleOnClickHome();}} variant="dark" className='back' >   חזור</Button>
           
          
           <h2 className='step2-h2'> שלב 2 : בחר תאריך</h2>
             <div className='step1Push'>
                
            
                     <div className='calendar-btn-container'>
                       {/* <div>{cityLocal}</div> */}

                 <div>       
                <button type='button'  onClick={()=>{localStorage.setItem('date', `${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button1">  <div className='calndar-container-text'>{`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[0]}`} </div></div> </button> 
                 <button type='button'  onClick={()=>{localStorage.setItem('date', `${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button2"> <div className='calndar-container-text'>{`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[1]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button3"> <div className='calndar-container-text'>{`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[2]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button4"> <div className='calndar-container-text'>{`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[3]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button5"> <div className='calndar-container-text'>{`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[4]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button6"> <div className='calndar-container-text'>{`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[5]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button7"> <div className='calndar-container-text'>{`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[6]}`} </div></div> </button>
                </div>
                <div className='calendar-roup2'>

                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button7"> <div className='calndar-container-text'>{`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[7]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button8"> <div className='calndar-container-text'>{`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[8]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button9"> <div className='calndar-container-text'>{`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[9]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button10"> <div className='calndar-container-text'>{`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[10]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button11"> <div className='calndar-container-text'>{`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[11]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button12"> <div className='calndar-container-text'>{`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[12]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button13"> <div className='calndar-container-text'>{`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[13]}`} </div></div></button>
                </div>
                     </div>
             </div>
             <hr className='hr2'></hr>
             </div>
           
     
     </div>

</AnimetedPagesLTR>
  );
  
  else  if(animationSlice.animationDiraction=="left")
  {
  
  return(
<AnimetedPagesRTL>
<div className="step2PageContainer">
        
        <div className='step2ContanetContainer'>
     
          <Button onClick={()=>{setAnimationDiractionL();handleOnClickHome();}} variant="dark" className='back' >   חזור</Button>
           
          
           <h2  className='step2-h2'> שלב 2 : בחר תאריך</h2>
             <div className='step1Push'>
                
            
             <div className='calendar-btn-container'>
                                     {/* <div>{cityLocal}</div> */}

                       <div>       
                <button type='button'  onClick={()=>{localStorage.setItem('date', `${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button1">  <div className='calndar-container-text'>{`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[0]}`} </div></div></button> 
                 <button type='button'  onClick={()=>{localStorage.setItem('date', `${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button2"> <div className='calndar-container-text'>{`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[1]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button3"> <div className='calndar-container-text'>{`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[2]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button4"> <div className='calndar-container-text'>{`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[3]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button5"> <div className='calndar-container-text'>{`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[4]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button6"> <div className='calndar-container-text'>{`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[5]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button7"> <div className='calndar-container-text'>{`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[6]}`} </div></div> </button>
                </div>
                <div className='calendar-roup2'>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button7"> <div className='calndar-container-text'>{`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[7]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button8"> <div className='calndar-container-text'>{`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[8]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button9"> <div className='calndar-container-text'>{`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[9]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button10"> <div className='calndar-container-text'>{`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[10]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button11"> <div className='calndar-container-text'>{`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[11]}`} </div></div></button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button12"> <div className='calndar-container-text'>{`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[12]}`} </div></div> </button>
                <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button13"> <div className='calndar-container-text'>{`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[13]}`} </div></div></button>
                </div>
                     </div>
             </div>
             
             <hr className='hr2'></hr>
             </div>
           
     
     </div>
</AnimetedPagesRTL>

  )
  }


    else 
    return(
      <AnimetedPagesUp>
      <div className="step2PageContainer">
              
              <div className='step2ContanetContainer'>
          
                <Button onClick={()=>{setAnimationDiractionL();handleOnClickHome();}} variant="dark" className='back' >   חזור</Button>
                
                
                <h2 className='step2-h2'> שלב 2 : בחר תאריך</h2>
                <div className='step1Push'>
                      
                  
                          <div className='calendar-btn-container'>
                            {/* <div>{cityLocal}</div> */}
      
                            <div>       
                      <button type='button'  onClick={()=>{localStorage.setItem('date', `${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button1"> <div> <div className='calndar-container-text'>{`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[0]}`} </div></div></div> </button> 
                      <button type='button'  onClick={()=>{localStorage.setItem('date', `${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button2"> <div className='calndar-container-text'>{`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[1]}`} </div></div> </button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button3"> <div className='calndar-container-text'>{`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[2]}`} </div></div> </button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button4"> <div className='calndar-container-text'>{`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[3]}`} </div></div> </button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button5"> <div className='calndar-container-text'>{`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[4]}`} </div></div></button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button6"> <div className='calndar-container-text'>{`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[5]}`} </div></div> </button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button7"> <div className='calndar-container-text'>{`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[6]}`} </div></div> </button>
                      </div>
                    <div className='calendar-roup2'>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button7"> <div className='calndar-container-text'>{`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[7]}`} </div></div></button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button8"> <div className='calndar-container-text'>{`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[8]}`} </div></div></button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button9"> <div className='calndar-container-text'>{`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[9]}`} </div></div></button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button10"> <div className='calndar-container-text'>{`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[10]}`} </div></div></button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button11"> <div className='calndar-container-text'>{`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[11]}`} </div></div></button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button12"> <div className='calndar-container-text'>{`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`} <div className='step2-cal-text'>{`${arrDay[12]}`} </div></div> </button>
                      <button type='button'   onClick={()=>{localStorage.setItem('date', `${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`);setAnimationDiractionR();handleOnClickDate();Object.assign(dateSlice, {Step2Date:`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`});}} class="btn-calender btn btn-outline-success button13"> <div className='calndar-container-text'>{`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`}  <div className='step2-cal-text'>{`${arrDay[13]}`} </div></div></button>
                      </div>
                          </div>
                  </div>
                  
                  <hr className='hr2'></hr>
                  </div>
                
          
          </div>
      </AnimetedPagesUp>
      
        )
        }




export default BookStep2;


