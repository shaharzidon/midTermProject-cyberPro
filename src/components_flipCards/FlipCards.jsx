import React, { useState } from 'react';
import './flipCards.css'
function FlipCards() {
    return (
        <div className='flipCards'>
            <div className='flipCards-upperSection'>
                <div className='flipCards-upperSection-text1'>
                    <h1 dir="rtl">״זבל במים של ישראל הם האחריות המשותפת שלנו״</h1>
                </div>
                <div className='flipCards-upperSection-text2'>
                    <h4 dir="rtl">בן שמואל, מחברי מיזם ״הקיאק״</h4>
                </div>
                <div className='flipCards-upperSection-text3'>
                    <h2 dir="rtl">ממליצים עלינו:</h2>
                </div>
            </div>
            <div className='flipCards-bottomSection'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card1">
                                <i class="fa fa-store"></i>
                                <h1 class="flip-card-front-heading"></h1>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h3 dir="rtl">יעל לוי - מנהלת שיווק </h3>
                            <p dir="rtl">"מיזם הקיאק הוא מדהים בעיני, מעניק הזדמנות לתרום לחברה בשילוב עם הנאה גדולה בשיט. אני מחכה בקוצר כבר לפעם הבאה!"</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card2">
                                <h3 class="flip-card-front-heading"></h3>
                                <i class="fa fa-chart-line"></i>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h3 dir="rtl"> קלרה ודוויד כהן- זוג נשוי</h3>
                            <p dir="rtl">״השיט בקיאק היה חוויה ממש משמעותית עבורנו. לבלות כזוג בשיט, בזמן שאחנו עושים מעשה טוב זו זכות אדירה. תודה ענקית לצוות מיזם ״הקיאק״ האדיב, ובמיוחד לאריק פינל המקסים!״</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card3">
                                <h3 class="flip-card-front-heading"></h3>
                                <i class="fa fa-building"></i>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h3 dir="rtl">תלמידי תיכון ״בליך״</h3>
                            <p dir="rtl">״כל-כך נהנו לקחת חלק במיזם ״הקיאק״. עשינו שם תמונות מטורפות, ובילינו זמן איכות מדהים יחד. פעילות שהיא חובה לכל גיל.״</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default FlipCards;

