import React from "react";
import './WorkExperience.css';
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../data";
//import Slider from "react-slick";


const WorkExperience = () => {

    /*const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };*/

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content" id = 'experience'>

                {/*<div className="arrow-right">
                    <span class="material-symbols-outlined" onClick={slideRight}>chevron_right</span>
                </div>

                <div className="arrow-left">
                    <span class="material-symbols-outlined" onClick={slideLeft}>chevron_left</span>
                </div>*/}

                {/*<Slider ref={sliderRef} {...settings}>*/}
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                {/*</Slider>*/}
            </div>
        </section>
    )
}

export default WorkExperience;