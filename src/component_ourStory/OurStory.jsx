import React, { useCallback } from 'react';
import { FaHeart , FaPhone, FaUserFriends} from 'react-icons/fa';
import './ourStory.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AnimetedPagesUp from '../AnimatedPagesUP';
import teamimg from './teamimg.jpeg'
function OurStory() {
    const navigate = useNavigate();
    const handleOnClickContrebute= useCallback(() => navigate('/Contribute', {replace: true}), [navigate]);
    const handleOnClickContact= useCallback(() => navigate('/Contact', {replace: true}), [navigate]);
    const handleOnClickHome= useCallback(() => navigate('/Home', {replace: true}), [navigate]);


    return (
        <div className='OurStory'>
            <div className='section1'>
            
                
                <div className='section1-title'>
                <h1> קצת עלינו </h1>
                </div>
            </div>
            <Button onClick={handleOnClickHome}></Button>
            <div className='section2'>
                <div className='section2-leftSection'>
                    <div className='section2-leftSection-content'>
                        <p dir="rtl"> ״הקיאק״ היא עמותה סביבתית העוסקת במתנדבים במאבק בזיהום הסביבה בזמן שיט קיאקים.
                        </p>
                        <p dir="rtl"> אנו מציעים לכולם לקפוץ לסיפון של הקיאק ולחתור בחינם בשני תנאים פשוטים.
                        </p>
                        <p dir="rtl">   • השקיעו את זמנכם במים באיסוף פסולת.
                        </p>
                        <p dir="rtl">   • שתפו את כמות הזבל שאספתם באצעות התיוג Hakayak#.
                        </p>

                        <p dir="rtl">
                            אנו מחויבים למשוך אנשים בגובה העיניים,
                            לחבר אותם על פני דורות ולתת להם את ההרגשה של להיות באותה סירה, מחוברים למטרה טובה.
                            פסולת בטבע היא נושא שמעסיק את כולנו וזו האחריות המשותפת שלנו להגן על המים שלנו.

                        </p>
                        <p dir="rtl"> ביחד, נוכל לעשות שינוי.
                        </p>
                        <p dir="rtl"> אנו מחויבים למשוך אנשים בגובה העיניים, לחבר אותם על פני
                            דורות ולתת להם את ההרגשה של להיות באותה סירה, מחוברים למטרה טובה.
                        </p>
                        <p dir="rtl">
                            פסולת בטבע היא נושא שמעסיק את כולנו וזו האחריות המשותפת שלנו להגן על המים שלנו.


                        </p>
                        <p dir="rtl"> אנחנו יודעים ש״הקיאק״ אינו
                            הפתרון שיציל את האוקיינוסים מזיהום פלסטיק. עם זאת, ״הקיאק״ היא דרך מדהימה
                            ויעילה מאוד לגרום לאזרחים לנקוט בפעולה מקומית, לחבר את עצמם ואחרים למים,
                            ולהתחיל דיאלוג על מה יידרש מכולנו כדי להילחם בזיהום הפלסטיק בסביבות מימיות.

                        </p>
                        <p dir="rtl"> הצטרפו למאבק!

                        </p>
                    </div>
                </div>
                <div className='section2-rightSection'>
                <div className='section2-rightSection-buttons'>
                    <Button className='ourstorybtn1'  onClick={handleOnClickContact} >צרו קשר </Button>
                    <Button className='ourstorybtn2' >השותפים שלנו</Button>
                    <Button className='ourstorybtn3' onClick={handleOnClickContrebute} >ביצוע תרומה </Button>
                        {/* <button className='contact' dir="rtl">צרו קשר</button>
                        <button className='partners' dir="rtl">השותפים שלנו</button>
                        <button className='contribution' dir="rtl"> ביצוע תרומה <FaHeart></FaHeart></button> */}
                    </div>
                    <div className='section2-rightSection-iframe'>
                        <iframe  className='responsive-iframe' src="https://www.youtube.com/embed/xDVJkwq0Uyw"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                      clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div className='section2-rightSection-content'>
                        <h2 dir="rtl">יחד אנו חותרים בשביל נקיון המים בישראל!</h2>
                    </div>
                </div>
            </div>
            <div className='section3'>
                <div className='section3-title'>
                    <h1 dir="rtl">הסיפור שלנו</h1>
                </div>
                <div className='section3-content' dir="rtl">
                    <p> בשנת 2022 3 חבר׳ה צעירים: בן שמואל, אריק פינל ושחר צידון החלו את לימודיהם בקורס 
                        Full-Stack  של חברת Cyber-Pro Israel . במעט הזמן הפנוי שהיה להם בסופי השבוע
                         הם החלו לאסוף אשפה שצפה במימי תל אביב. החברים הטובים
                         החליטו לנסות לייעל את התהליך ולאסוף את הזבל בזמן שהם 
                        שוכרים קיאק. פה נולד רעיון מיזם ״הקיאק״. החברים החלו
                         לאסוף אשפה כחלק משיט קיאקים בנהר הירקון בצורה מוסדרת. עד 
                        מהרה הבחינו שלמחרת יש אשפה באותם מקומות שוב. היה
                         צורך בעזרה כדי להתמודד עם בעיה זו, וכולם היו צריכים
                         להיות מסוגלים להשתתף. לאחר מכן הם הפיצו את הרעיון של 
                        לאסוף זבל כחלק משיט קיאקים. הרעיון תפס תאוצה מסחררת
                         שבועות קדימה וכל האפשרויות לשיט נקיון היו תפוסות.
                    </p>
                    <p dir="rtl"> 
                    במהלך השבועות הראשנים, המתנדבים אספו 
                     טונות של פסולת פלסטיק 
                     בעיקר מנהר הירקון בתל אביב ובניקוי חופים שונים. הבנו שיש הזדמנות
                     לעשות משהו מעבר לסביבה המימית. זה הרגע שבו הבנו שאנחנו יכולים לעשות
                     שינוי בישראל כאשר עובדים יחד עם קהילות מקומיות ברחבי ערים ומועצות אחרות.
                    </p>
                </div>
                <div>
                    <img src={teamimg} />
                </div>
            </div>
            <div className='section4'>
                <div className='section4-cardsSection'>
                    <div className='section4-cardsSection-leftSection'>
                        <div className='section4-cardsSection-leftSection-title'>
                            <h1 dir="rtl">החזון שלנו</h1>
                        </div>
                        <div className='section4-cardsSection-leftSection-content'>
                            <p dir="rtl">לאפשר לכולם לנקוט פעולה מקומית למען הסביבה על 
                            ידי בניית רשת ארצית של ״הקיאק״,יחד עם 
                            שיתוף הידע והכנסת אחריות סביבתית לחיי היומיום של האנשים.
                            </p>
                        </div>
                    </div>
                    <div className='section4-cardsSection-rightSection'>
                        <div className='section4-cardsSection-rightSection-title'>
                            <h1 dir="rtl">המשימה שלנו</h1>
                        </div>
                        <div className='section4-cardsSection-rightSection-content'>
                            <p dir="rtl">אנו שואפים לערב כמה שיותר אנשים במאבק בזיהום המים בישראל וביחד,
                             לשחרר סביבות מימיות מקומיות מפלסטיק ופסולת אחרת.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurStory;

