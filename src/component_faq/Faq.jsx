import React from 'react';
import './faq.css'

function Faq() {
    return (
        <div className='faq'>
            <div className='upperSection'>
                <h1 dir="rtl">שאלות נפוצות</h1>
            </div>
            <div className='bottomSection'>
                <div className='bottomSection-content'>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">איך אני מבטלת הזמנה?</h5>
                        <p  dir="rtl">לאחר הזמנת שיט בקיאק, אתה מקבל מייל המאשר את ההזמנה, יש קישור בתחתית המייל שבו אתה יכול לבטל את ההזמנה שלך.</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">אני מתחת לגיל 18, האם אני יכולה להשתמש בקיאק?</h5>
                        <p dir="rtl">כן, אבל את חייבת להיות מלווה על ידי מבוגר שאחראי עליך במהלך השיט.</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">כמה אנשים מתאימים לשיט בקיאק?</h5>
                        <p dir="rtl">הקיאק מתאים מקסימום לשני אנשים.</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">האם אני צריכה ניסיון קודם בשיט קיאקים?</h5>
                        <p dir="rtl">את לא צריכה ניסיון קיאק שכן הקיאק יציב מאוד. הקיאק הוא רחב למתחילים ונוח לכל הגילאים.</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">האם אני צריך לדעת לשחות?</h5>
                        <p dir="rtl">כן, חשוב שמשתתף יוכל לשחות כי אתם חותרים לבד ללא מדריך קיאקים.</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">מה אם לא אמצא אשפה בסיור שלי?</h5>
                        <p dir="rtl">עוד לא ראינו שאנשים חזרו עם דלי ריק, אבל אם זה יקרה לכם, פנטסטי!</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5 dir="rtl">האם עלי לשתף תמונות של החוויה שלי ברשתות החברתיות?</h5>
                        <p dir="rtl"> בוודאי! פרוייקט ״הקיאק״ הוא למעשה מיזם חברתי ומה יותר טוב להפצת כל הטוב הזה מהרשתות החברתיות. מוזמנים לשתף כמה שרק אפשר :)</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Faq;

