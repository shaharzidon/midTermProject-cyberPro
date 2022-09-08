import React from 'react';
import './ourImpact.css'
import icon1 from '../component_ourImpact/icon1green.png'
import icon2 from '../component_ourImpact/icon2green.png'
function OurImpact() {
    return (
        <div className='our-impact'>
            <h1>ההשפעה שלנו</h1>
            <div className='upper-section'>
                <div className='left-section'>
                    <div className='left-section-img'>
                        

                    </div>
                    <div className='left-section-text'>
                    <h3><img src={icon1} height={400} width={350}/></h3>
                        <div>יש לנו</div>
                        <div>4534535</div>
                        <div>מתנדבים</div>
                    </div>

                </div>
                <div className='right-section'>
                    <div className='right-section-img'>
                    <h3><img src={icon2} height={400} width={350}/></h3>
                        <h3>add a logo</h3>
                    </div>
                    <div className='right-section-text'>
                        <div>:ביחד, ניקינו יותר מ</div>
                        <div>120</div>
                        <div>ק״ג של זבל ממקורות המים בישראל</div>

                    </div>
                </div>
            </div>

            <div className='bottom-section'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimu
                    impedit esse magnam eveniet architecto enim amet quos reprehenderit iusto,
                    animi quidem illo. Minima asperiores dicta voluptatem reiciendis
                    laudantium non?</p>
            </div>
        </div>
    );
}
export default OurImpact;

