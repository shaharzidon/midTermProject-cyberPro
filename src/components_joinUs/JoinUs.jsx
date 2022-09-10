import React from 'react';
import './joinUs.css'
import eilat from './eilat.jpeg'
import kineret from './kineret.webp'
import telaviv from './telaviv.jpeg'
import haifa from './haifa.jpeg'
import Button from 'react-bootstrap/Button';

function JoinUs() {
    return (
        <div className='joinUs'>
<<<<<<< HEAD
            <div className='main-title' dir="rtl"><h1>הצטרפו לקהילת הקיאק!</h1></div>
            <div className='para'>
                <p dir="rtl">
                    הצטרפו לקהילות ״הקיאק״! אנו נעודד אתכם להתחבר, לחתור יחד ולשתף את התמונות 
                    והחוויות שלכם עם אחרים.
                </p>
                <p dir="rtl">
                    זה לא משנה אם אתם חדשים בעיר,  רוצים לנסות הרפתקה חדשה או שאתם פשוט רוצים
                     להכיר אנשים חדשים תוך כדי עשייה טובה
                     - פרסמו פוסט והזמינו אחרים להצטרף אליכם בזמן שאתם חותרים ומנקים!
                </p>
                <p dir="rtl">
                    התנדבות למען הסביבה תמיד שווה צילום! אנו מצפים לתמונות שלכם, 
                    בין אם צילמתם תפיסה ענקית והחזקתם 30 ק"ג של אשפה עד המצלמה או שמצאתם משהו מוזר.
                </p>
                <p dir="rtl">
                    אנו שמחים לפרסם את מיטב התמונות שלך בערוצי המדיה החברתית שלנו.
                     הצטרף לקהילת ״הקיאק״ שלך היום וחתרו עם אחרים עוד היום!
                </p>
=======
            <div className='main-title'><h1> הצטרפו לקהילת הקיאק וקחו חלק קטן בתהליך גדול</h1></div>
            <div className='para'>
          קהילת המתנדבים שלנו פרוסה בכל רחבי הארץ וניתן להתנדב במגוון מקומות מדן ועד אילת 
          הצטרפו לקבוצות הפייסבוק שלנו הקרובות לאיזור מגוריכם וקחו חלק קטן משינוי ענק במידה ואתם מעוניינים לתרום למיזם תוכלו לעשות זאת בקלות 
          על ידי לחיצה על כפתור התרומה הממוקם בראש האתר ובכך לתמוך בנו בשאיפה לארץ נקייה ויפה 
>>>>>>> be72bdc (fix)
            </div>
            <div className='secondary-title'>
                <h2 dir="rtl">קחו חלק בקבוצות הפייסבוק שלנו:</h2>
            </div>
            <div className='btn-ctrl'>
            <Button className='btn1' variant="outline-*">תל אביב</Button>
            <Button className='btn2' variant="outline-*">כינרת</Button>
            <Button className='btn3' variant="outline-*">חיפה</Button>
            <Button className='btn4' variant="outline-*">אילת</Button>
            </div>
            {/*להתאים כפתורים למקומות בהם מציעים את השירות שלנו */}
            <div className='images'>
                
                <img className='telaviv' src={telaviv} width={250} height={250}></img>
        
                <img className='kineret' src={kineret} width={250} height={250} />
              
                <img className='haifa' src={haifa} width={250} height={250} />
            
                <img className='eilatimg' src={eilat} width={250} height={250}></img>
            </div>
        </div>
    );
}

export default JoinUs;
