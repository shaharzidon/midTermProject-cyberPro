import React from 'react';
import './ourImpact.css'
import icon1 from '../component_ourImpact/icon1.png'
import icon2 from '../component_ourImpact/icon2.png'
function OurImpact() {
    return (
        <div className='our-impact'>
            <h1 className='head'>ההשפעה שלנו</h1>
            <div className='upper-section'>
                <div className='left-section'>
                    <div className='left-section-img'>
                        <h3><img className='icon1img' src={icon1} height={400} width={350} /></h3>
                    </div>
                    <div className='left-section-text'>
                        <div dir='rtl' className="logo1text1">נכון לשנת 2022 למיזם יש: </div>
                        <div ><h1 className="logo1text2">2335</h1></div>
                        <div className="logo1text3">מתנדבות ומתנדבים</div>
                    </div>

                </div>
                <div className='right-section'>
                    <div className='right-section-img'>
                        <h3><img className='icon2img' src={icon2} height={400} width={350} /></h3>
                    </div>
                    <div className='right-section-text'>
                        <div dir='rtl' className='icon2text1'>מתנדבי ומתנדבות ״הקיאק״ ליקטו יותר מ: <p></p></div>
                        <div><h1 className='icon2text2'>120</h1></div>
                        <div className='icon2text3'>ק״ג של זבל ממקורות המים בכל רחבי ישראל</div>
                    </div>
                </div>
            </div>

            <div dir='rtl' className='bottom-section'>
                <p>מאז הקמת המיזם בישראל נאספו על ידי המתנדבים שלנו כ120 ק״ג של זבל וחומרים מזהמים כגון : מיקרו פלסטיק,קלקר ועוד
                    ,חומרים אשר בתהליך הפירוק שלהם היו פולטים מזהמים ולכלוך למים שכולנו שותים, בעזרתכם נוכל להגדיל את היקף המיזם ולהקטין את כמות הזבל והמזהמים שנמצאים במים שמגיעים לכולנו ,תוך כדי שילוב אטרקציה חוויתית של שיט בקיאק ,ככה גם אנחנו מרויחים וגם הסביבה שלנו מרוויחה
                    למען עתיד טוב יותר לכולנו ושמירה על ריאות הטבע הירוקות של מדינתנו היפה.
                </p>
            </div>
        </div>
    );
}
export default OurImpact;

