import React from 'react';
import './joinUs.css'
function JoinUs() {
    return (
        <div className='joinUs'>
            <div className='main-title'><h1>!הצטרפו לקהילת הקיאק</h1></div>
            <div className='para'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sed dolores
            molestias consectetur facilis repellendus deleniti, similique eligendi 
            consequuntur ipsa reprehenderit ex. Officiis nihil quidem provident magni
            in tenetur quo?
            </div>
            <div className='secondary-title'>
                <h2>:קחו חלק בקבוצות הפייסבוק שלנו</h2>
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
