import React from 'react';
import './joinUs.css'
import Button from 'react-bootstrap/Button';

function JoinUs() {
    return (
        <div className='joinUs'>
            <div className='main-title'><h1> הצטרפו לקהילת הקיאק וקחו חלק קטן בתהליך גדול</h1></div>
            <div className='para'>
          קהילת המתנדבים שלנו פרוסה בכל רחבי הארץ וניתן להתנדב במגוון מקומות מדן ועד אילת 
          הצטרפו לקבוצות הפייסבוק שלנו הקרובות לאיזור מגוריכם וקחו חלק קטן משינוי ענק במידה ואתם מעוניינים לתרום למיזם תוכלו לעשות זאת בקלות 
          על ידי לחיצה על כפתור התרומה הממוקם בראש האתר ובכך לתמוך בנו בשאיפה לארץ נקייה ויפה 
            </div>
            <div className='secondary-title'>
                <h2 dir="rtl">קחו חלק בקבוצות הפייסבוק שלנו:</h2>
            </div>
            <div className='btn-ctrl'>
            <Button className='btn1' variant="outline-* btn-lg">תל אביב</Button>
            <Button className='btn2' variant="outline-* btn-lg">כינרת</Button>
            <Button className='btn3' variant="outline-* btn-lg">חיפה</Button>
            <Button className='btn4' variant="outline-* btn-lg">אילת</Button>
            </div>
            {/*להתאים כפתורים למקומות בהם מציעים את השירות שלנו */}
                

            </div>
        
    );
}

export default JoinUs;
