import React, { useState } from 'react';
import './flipCards.css'
function FlipCards() {
    return (
        <div className='flipCards'>
            <div className='flipCards-upperSection'>
                <div className='flipCards-upperSection-text1'>
                    <h1>״זבל במים של ישראל הם האחריות המשותפת שלנו״</h1>
                </div>
                <div className='flipCards-upperSection-text2'>
                    <h4>בן שמואל, מחברי מיזם ״הקיאק״</h4>
                </div>
                <div className='flipCards-upperSection-text3'>
                    <h2>יחד, אנו חותרים למען המים של ישראל</h2>
                </div>
            </div>
            <div className='flipCards-bottomSection'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card1">
                                <i class="fa fa-store"></i>
                                <h1 class="flip-card-front-heading">Digital Marketing</h1>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Digital Marketing</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nam dolores perferendis illo ut voluptatibus, repudiandae provident facilis.</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card2">
                                <h1 class="flip-card-front-heading">Market Analysis</h1>
                                <i class="fa fa-chart-line"></i>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Market Analysis</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nam dolores perferendis illo ut voluptatibus, repudiandae provident facilis ratione voluptatem veniam vitae sapiente magni corrupti quod quidem fuga saepe error.</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card3">
                                <h1 class="flip-card-front-heading">Branding</h1>
                                <i class="fa fa-building"></i>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h1>Branding</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nam dolores perferendis illo ut voluptatibus, repudiandae provident facilis ratione voluptatem veniam vitae sapiente magni corrupti quod quidem fuga saepe error.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default FlipCards;

