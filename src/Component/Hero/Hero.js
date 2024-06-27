import React from 'react';
import './Hero.css';



const Hero = () => {
    return (
        <>
            <section className='hero-container' id = 'home'>
                <div className='hero-content'>

                    <div className='typewriter-container'>
                        <h2 className = 'text_1' style={{fontSize: 50}}>DEVELOPER</h2>
                        <h2 className='text_2' style={{fontSize: 50}}>DATA ANALYTICS</h2>
                    </div>
                    <p>Crafting Solutions With Passion And Precision</p>
                    <p>Driven and detail-oriented Software Developer, 
                        passionate about coding and eager to contribute to dynamic projects. 
                    </p>
                </div>
                
                <div className='hero-img'>
                    <div className='display-pic'>
                        <img src="Icons/Photo.jpeg" height = "430px" width = "370px" alt='DP'/>
                    </div>
                        
                    <div className='hero-icon'>
                        <img src="Icons/react.png" height = '40px' width = '40px' title = "React" alt='react'/>   
                        <img src="Icons/html-5.png" height = '40px' width = '40px' title = "HTML" alt='HTML'/>
                        <img src="Icons/css-3.png" height = '40px' width = '40px' title = "CSS" alt='CSS'/>
                        <img src="Icons/javascript-1.png" height = '40px' width = '40px' title = "JavaScript" alt='JavaScript'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;