import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/Testimonials.css';
import './css/Home.css';
import TestimonialCard from './TestimonialCard';
import ImageCarousel from './ImageCarousel';
import { testimonialsData } from '../data/testimonialsData';
function Testimonials() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImages, setActiveImages] = useState([]);

    useEffect(() => {
        const testimonialContainer = document.getElementById('cardTestimonialContainer');
        const prevButton = document.getElementById('leftTestimonials');
        const nextButton = document.getElementById('rightTestimonials');
        
        if (!testimonialContainer || !prevButton || !nextButton) return;
        
        const containerWidth = testimonialContainer.getBoundingClientRect().width;

        const handleNext = () => {
            testimonialContainer.scrollLeft += containerWidth;
        };
        
        const handlePrev = () => {
            testimonialContainer.scrollLeft -= containerWidth;
        };

        nextButton.addEventListener('click', handleNext);
        prevButton.addEventListener('click', handlePrev);

        return () => {
            nextButton.removeEventListener('click', handleNext);
            prevButton.removeEventListener('click', handlePrev);
        };
    }, []);

    const handleCardClick = (images) => {
        setActiveImages(images);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setActiveImages([]);
    };
    return (
        <div className="Testimonials" id='Testimonials'>
            <h2 className="hidden section-title">
                {t('someFeedbacks')}
            </h2>
            <div className='sliderContainer'>
                <button className="TestimonialsButton leftTesti" id='leftTestimonials'>&#10094;</button>
                
                <div className='cardTestimonialContainer' id='cardTestimonialContainer'>
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard 
                            key={index}
                            testimonial={testimonial}
                            onCardClick={handleCardClick}
                        />
                    ))}
                </div>
                
                <button className="TestimonialsButton rightTesti" id='rightTestimonials'>&#10095;</button>
            </div>

            {isModalOpen && (
                <ImageCarousel
                    images={activeImages}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

export default Testimonials;