import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './ourStory.css'
function OurStory() {
    return (
        <div className='OurStory'>
            <div className='section1'>
                <div className='section1-title'>
                    <h1>עלינו</h1>
                </div>
            </div>
            <div className='section2'>
                <div className='section2-leftSection'>
                    <div className='section2-leftSection-content'>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                            voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                            facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                            ratione?
                        </p>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                            voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                            facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                            ratione?
                        </p>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                            voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                            facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                            ratione?
                        </p>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                            voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                            facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                            ratione?
                        </p>
                    </div>
                </div>
                <div className='section2-rightSection'>
                    <div className='section2-rightSection-iframe'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xDVJkwq0Uyw"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                      clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='section2-rightSection-buttons'>
                        <button className='contact'>צרו קשר</button>
                        <button className='partners'>השותפים שלנו</button>
                        <button className='contribution'> ביצוע תרומה <FaHeart></FaHeart></button>
                    </div>
                    <div className='section2-rightSection-content'>
                        <h2>!יחד אנו חותרים בשביל נקיון המים בישראל</h2>
                    </div>
                </div>
            </div>
            <div className='section3'>
                <div className='section3-title'>
                    <h1>הסיפור שלנו</h1>
                </div>
                <div className='section3-content'>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                        voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                        facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                        ratione?
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                        voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                        facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                        ratione?
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                        voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                        facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                        ratione?
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                        voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                        facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                        ratione?
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repudiandae
                        voluptatem quam? Cumque, dolor. Obcaecati nostrum necessitatibus aspernatur ad
                        facere itaque, et eaque doloremque adipisci nisi similique nesciunt accusamus
                        ratione?
                    </p>
                </div>
            </div>
            <div className='section4'>
                <div className='section4-cardsSection'>
                    <div className='section4-cardsSection-leftSection'>
                        <div className='section4-cardsSection-leftSection-title'>
                            <h1>החזון שלנו</h1>
                        </div>
                        <div className='section4-cardsSection-leftSection-content'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis debitis
                                assumenda perferendis quaerat ab porro dolorem incidunt, sequi cum omnis!
                            </p>
                        </div>
                    </div>
                    <div className='section4-cardsSection-rightSection'>
                        <div className='section4-cardsSection-rightSection-title'>
                            <h1>המשימה שלנו</h1>
                        </div>
                        <div className='section4-cardsSection-rightSection-content'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis debitis
                                assumenda perferendis quaerat ab porro dolorem incidunt, sequi cum omnis!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurStory;

