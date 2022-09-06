import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import "./book-step2.css"



function BookStep2() {
    const arr = []
    let myDate = new Date();
    function addDate(){
        console.log("runs")
        for(let i=1;i<=14;i++)
        {
            
           let temp= (myDate.getTime()+(i*24*60*60*1000));
            let date = new Date(temp);
            // console.log(temp+",,,"+date)

    
        // let dateObj={"month":date.getMonth()+1,"day":date.getDay()} 
        // let temparr=arr;
        // var today = new Date();
        // var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+i);
        
        
// temparr.push(dateObj);
// console.log(temparr)
arr.push(date)

    }
    }

    addDate()
    // useEffect(() => {
    //     console.log('hi');
    //     // Update the document title using the browser API
       
    //   });

  return (
      <div className="step2PageContainer">
        
   <div className='step2ContanetContainer'>

     <Button variant="dark" className='back' >חזרה</Button>
      
      <hr className='hr2'></hr>
      <h2> שלב 2 : בחר תאריך</h2>
        <div>
           
       
                <div className='row'>
              
                <button class="btn-calender btn btn-outline-success button1">  {`${ arr[0].getDate()+ "/" +(arr[0].getMonth()+1)}`} </button> 
                 <button class="btn-calender btn btn-outline-success button2"> {`${ arr[1].getDate()+ "/" +(arr[1].getMonth()+1)}`}</button>
                <button class="btn-calender btn btn-outline-success button3"> {`${ arr[2].getDate()+ "/" +(arr[2].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button4"> {`${ arr[3].getDate()+ "/" +(arr[3].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button5"> {`${ arr[4].getDate()+ "/" +(arr[4].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button6"> {`${ arr[5].getDate()+ "/" +(arr[5].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button7"> {`${ arr[6].getDate()+ "/" +(arr[6].getMonth()+1)}`} </button>
               </div>

                <div className='row'>
                <button class="btn-calender btn btn-outline-success button8"> {`${ arr[7].getDate()+ "/" +(arr[7].getMonth()+1)}`}</button>
                <button class="btn-calender btn btn-outline-success button9"> {`${ arr[8].getDate()+ "/" +(arr[8].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button10"> {`${ arr[9].getDate()+ "/" +(arr[9].getMonth()+1)}`}</button>
                <button class="btn-calender btn btn-outline-success button11"> {`${ arr[10].getDate()+ "/" +(arr[10].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button12"> {`${ arr[11].getDate()+ "/" +(arr[11].getMonth()+1)}`} </button>
                <button class="btn-calender btn btn-outline-success button13"> {`${ arr[12].getDate()+ "/" +(arr[12].getMonth()+1)}`}</button>
                <button class="btn-calender btn btn-outline-success button15"> {`${ arr[13].getDate()+ "/" +(arr[13].getMonth()+1)}`} </button> 
           
                </div>
        </div>
        <hr className='hr2'></hr>
        </div>
      </div>


  );
}

export default BookStep2;
