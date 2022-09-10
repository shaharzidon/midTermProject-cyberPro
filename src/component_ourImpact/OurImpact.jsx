import React from 'react';
import './ourImpact.css'
import icon1 from '../component_ourImpact/icon1green.png'
import icon2 from '../component_ourImpact/icon2green.png'
function OurImpact() {
    return (
        <div className='our-impact'>
            <h1 dir="rtl">ההשפעה שלנו</h1>
            <div className='upper-section'>
                <div className='left-section'>
                    <div className='left-section-img'>
                        

                    </div>
                    <div className='left-section-text'>
                    <h3><img src={icon1} height={400} width={350}/></h3>
                        <div dir="rtl">יש לנו</div>
                        <div>4534535</div>
                        <div dir="rtl">מתנדבים</div>
                    </div>

                </div>
                <div className='right-section'>
                    <div className='right-section-img'>
                    <h3><img src={icon2} height={400} width={350}/></h3>
                        <h3>add a logo</h3>
                    </div>
                    <div className='right-section-text'>
                        <div dir="rtl">ביחד, ניקינו יותר מ:</div>
                        <div>120</div>
                        <div dir="rtl">ק״ג של זבל ממקורות המים בישראל</div>

                    </div>
                </div>
            </div>

            <div className='bottom-section'>
                <p dir="rtl"> ״הקיאק״ היא עמותה סביבתית המתבססת במתנדבים במאבק בזיהום הסביבה בזמן שייט קיאקים. 
                אנו מזמינים את כולם לקפוץ לסיפוןשל ״הקיאק״ ולחתור בחינם בשני
                 תנאים פשוטים - העבירו את זמנכם על המים באיסוף פסולת ושתפו את החוויה שלכם ברשתות 
                 החברתיות באמצעות Hakayak#.</p>
            </div>
        </div>
    );
}
export default OurImpact;

