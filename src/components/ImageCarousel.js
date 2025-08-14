import React, { useEffect, useRef } from 'react';

function ImageCarousel({ images, isOpen, onClose }) {
    const currentIndexRef = useRef(0);
    const modalRef = useRef(null);

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        const handleModalClick = (event) => {
            if (event.target === modal) {
                onClose();
            }
        };

        const showImage = (index) => {
            const imageElements = modal.querySelectorAll('.carousel-image');
            const counterElement = modal.querySelector('.image-counter');
            
            imageElements.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });

            if (counterElement) {
                if (index === 0) {
                    counterElement.textContent = 'Final';
                } else {
                    counterElement.textContent = `Climb: ${index}/${images.length - 1}`;
                }
            }
        };

        const nextImage = () => {
            currentIndexRef.current = (currentIndexRef.current + 1) % images.length;
            showImage(currentIndexRef.current);
        };

        const prevImage = () => {
            currentIndexRef.current = (currentIndexRef.current - 1 + images.length) % images.length;
            showImage(currentIndexRef.current);
        };

        const leftButton = modal.querySelector('.left');
        const rightButton = modal.querySelector('.right');

        modal.addEventListener('click', handleModalClick);
        leftButton?.addEventListener('click', prevImage);
        rightButton?.addEventListener('click', nextImage);

        if (isOpen) {
            currentIndexRef.current = 0;
            showImage(0);
            modal.showModal();
        } else {
            modal.close();
        }

        return () => {
            modal.removeEventListener('click', handleModalClick);
            leftButton?.removeEventListener('click', prevImage);
            rightButton?.removeEventListener('click', nextImage);
        };
    }, [images, isOpen, onClose]);

    return (
        <dialog className='modal' ref={modalRef}>
            <button className="carousel-button left">&#10094;</button>
            <button className="carousel-button right">&#10095;</button>
            <div className="carousel-container">
                <div className="carousel-images">
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image.src} 
                            alt={image.alt} 
                            className={`carousel-image ${index === 0 ? 'active' : ''}`} 
                        />
                    ))}
                </div>
            </div>
            <div className="image-counter">Final</div>
        </dialog>
    );
}

export default ImageCarousel;