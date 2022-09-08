import React from 'react';
import {FaFacebook} from 'react-icons/fa';


import './firstSection.css' 

function FirstSection() {
    return (
        
        <div className='first-section'>
            <div className='contant-container'>
            <h1>שוטו בשביל מים נקיים יותר בישראל</h1>
            <h2>!שוטו בחינם ולקטו זבל. בתום השיט שקלו את כמות הזבל ושתפו ברשתות החברתיות</h2>
            <div className='buttons-ctrl'>
                <button>עקבו אחרינו בפייסבוק <FaFacebook className='facebook'/></button>
                <button>!הזמינו קיאק</button>

                </div>
                <div className='div2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repellat dolor possimus ratione fugit perspiciatis ipsa? Quaerat autem, assumenda itaque inventore natus earum voluptatibus dolore alias, labore necessitatibus veritatis eum.
                
                </div>


            </div> 
        </div> 
    );
}
export default FirstSection;

