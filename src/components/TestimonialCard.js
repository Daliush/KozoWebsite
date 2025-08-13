import React from 'react';

function TestimonialCard({ testimonial, onCardClick }) {
    const handleClick = () => {
        onCardClick(testimonial.images);
    };

    return (
        <div className="cardTestimonial" onClick={handleClick}>
            <div className='mainTestimonial'>
                <div className='nameContainer'>
                    <a>{testimonial.name}</a>
                    <img src={testimonial.flag} alt={`${testimonial.flagAlt} flag`} className='flag' />
                </div>
                <hr />
                <img className='imageTestimonial' src={testimonial.thumbnail} alt={`${testimonial.name} thumbnail`} />
            </div>
        </div>
    );
}

export default TestimonialCard;