
import './joinUs.css'
import Button from 'react-bootstrap/Button';
import React, { useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import AnimetedPagesUp from '../AnimatedPagesUP';
import { value, setTelAviv, setHeifa, setTveria,setEylat  } from '../citySlice'

function JoinUs() {
const navigate = useNavigate();
const handleOnClickTelAviv= useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
const handleOnClickTveria= useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
const handleOnClickHeifa = useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
const handleOnClickEylat = useCallback(() => navigate('/BookStep2', {replace: true}), [navigate]);
const handleOnClickHome= useCallback(() => navigate('/Home', {replace: true}), [navigate]);
const city = useSelector(value)
  const dispatch = useDispatch()
    return (
        <AnimetedPagesUp>
        <div className='joinUs'>
                
            <div className='main-title'><h1> הצטרפו לקהילת הקיאק וקחו חלק קטן בתהליך גדול</h1></div>
            <div className='para'>
          קהילת המתנדבים שלנו פרוסה בכל רחבי הארץ וניתן להתנדב במגוון מקומות מדן ועד אילת 
          הצטרפו לקבוצות הפייסבוק שלנו הקרובות לאיזור מגוריכם וקחו חלק קטן משינוי ענק במידה ואתם מעוניינים לתרום למיזם תוכלו לעשות זאת בקלות 
          על ידי לחיצה על כפתור התרומה הממוקם בראש האתר ובכך לתמוך בנו בשאיפה לארץ נקייה ויפה 
            </div>
            <div className='secondary-title'>
                <h2 className='secondary-title-joinTitle' dir="rtl">קחו חלק בקבוצות הפייסבוק שלנו:</h2>
            </div>
            <div className='btn-ctrl'>
            <Button className='btn1' variant="outline-* btn-lg"  onClick={() => {handleOnClickTelAviv(); dispatch(setTelAviv());}}>תל אביב</Button>
            <Button className='btn2' variant="outline-* btn-lg"  onClick={() => {handleOnClickHeifa(); dispatch(setHeifa());}}>כינרת</Button>
            <Button className='btn3' variant="outline-* btn-lg" onClick={() => {handleOnClickTveria(); dispatch(setTveria());}}>חיפה</Button>
            <Button className='btn4' variant="outline-* btn-lg" onClick={() => {handleOnClickEylat(); dispatch(setEylat());}}>אילת</Button>
            </div>
            {/*להתאים כפתורים למקומות בהם מציעים את השירות שלנו */}
                

            </div>
            </AnimetedPagesUp>
        
    );
}

export default JoinUs;
