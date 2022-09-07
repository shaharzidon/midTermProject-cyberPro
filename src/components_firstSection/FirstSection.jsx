import React from 'react';
import {FaFacebook} from 'react-icons/fa';

import './firstSection.css' 
function FirstSection() {
    return (
        <div className='first-section'>
            <div className='main-title'><h1>שוטו בשביל מים נקיים יותר בישראל</h1></div>
            <div className='secondry-title'><h2>!שוטו בחינם ולקטו זבל. בתום השיט שקלו את כמות הזבל ושתפו ברשתות החברתיות</h2></div>
            <div className='buttons-ctrl'>
                <button>עקבו אחרינו בפייסבוק <FaFacebook className='facebook'/></button>
                <button>!הזמינו קיאק</button>
            </div>
        </div>
    );
}
export default FirstSection;

