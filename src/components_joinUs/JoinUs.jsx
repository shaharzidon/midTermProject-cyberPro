import React from 'react';
import './joinUs.css'
function JoinUs() {
    return (
        <div className='joinUs'>
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
            </div>
            <div className='secondary-title'>
                <h2 dir="rtl">קחו חלק בקבוצות הפייסבוק שלנו:</h2>
            </div>
            {/*להתאים כפתורים למקומות בהם מציעים את השירות שלנו */}
            <div className='btn-ctrl'>
                <div className='btn-1'><button>תל אביב</button></div>
                <div className='btn-2'><button>טבריה</button></div>
                <div className='btn-3'><button>חיפה</button></div>
                <div className='btn-4'><button>אילת</button></div>
            </div>
        </div>
    );
}

export default JoinUs;
