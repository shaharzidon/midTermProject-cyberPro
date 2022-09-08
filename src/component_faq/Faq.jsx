import React from 'react';
import './faq.css'

function Faq() {
    return (
        <div className='faq'>
            <div className='upperSection'>
                <h1>שאלות נפוצות</h1>
            </div>
            <div className='bottomSection'>
                <div className='bottomSection-content'>
                    <div className='bottomSection-content-faqText'>
                        <h5>?איך אני מבטלת הזמנה</h5>
                        <p>.לאחר הזמנת שיט בקיאק, אתה מקבל מייל המאשר את ההזמנה, יש קישור בתחתית המייל שבו אתה יכול לבטל את ההזמנה שלך</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5>?אני מתחת לגיל 18, האם אני יכולה להשתמש בקיאק</h5>
                        <p>.כן, אבל את חייבת להיות מלווה על ידי מבוגר שאחראי עליך במהלך השיט</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5>?כמה אנשים מתאימים לשיט בקיאק</h5>
                        <p>.הקיאק מתאים מקסימום לשני אנשים</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5>?האם אני צריכה ניסיון קודם בשיט קיאקים</h5>
                        <p>.את לא צריכה ניסיון קיאק שכן הקיאק יציב מאוד. הקיאק הוא רחב למתחילים ונוח לכל הגילאים</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5>?האם אני צריך לדעת לשחות</h5>
                        <p>.כן, חשוב שמשתתף יוכל לשחות כי אתם חותרים לבד ללא מדריך קיאקים</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5>?מה אם לא אמצא אשפה בסיור שלי</h5>
                        <p>!עוד לא ראינו שאנשים חזרו עם דלי ריק, אבל אם זה יקרה לכם, פנטסטי</p>
                    </div>
                    <div className='bottomSection-content-faqText'>
                        <h5>?האם עלי לשתף תמונות של החוויה שלי ברשתות החברתיות</h5>
                        <p>   (: בוודאי! פרוייקט ״הקיאק״ הוא למעשה מיזם חברתי ומה יותר טוב להפצת כל הטוב הזה מהרשתות החברתיות. מוזמנים לשתף כמה שרק אפשר</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Faq;

