import './css/Testimonials.css';
import './css/Home.css';
import daliushTestimonials from '../images/testimonialDaliush.png'
import zed from '../images/galaxy-slayer-zed-splash.jpg'
import tengen from '../images/tengenSmiling.jpg'
import elyfroThumbnail from '../images/Elyfro_thumbnail.png'
import elyfro1 from '../images/Elyfro_1.png'
import elyfro2 from '../images/Elyfro_2.png'
import elyfro3 from '../images/Elyfro_3.png'
import fiansoThumbnail from '../images/Fianso_Thumbnail.png'
import fianso1 from '../images/Fianso_1.png'
import fianso2 from '../images/Fianso_2.png'
import fianso3 from '../images/Fianso_3.png'
import fianso4 from '../images/Fianso_4.png'
import lightThumbnail from '../images/Light_Thumbnail.png'
import light1 from '../images/Light_1.png'
import kheopsThumbnail from '../images/Kheops_Thumbnail.png'
import kheops1 from '../images/Kheops_1.png'
import kheops2 from '../images/Kheops_2.png'
import { useEffect } from 'react';
function Testimonials() {
    useEffect(() => {

        const modals = document.getElementsByClassName('modal');
        const openModals = document.getElementsByClassName('cardTestimonial')
        let images;
        console.log(openModals);

        Array.from(openModals).forEach((openModal, index) => {
            openModal.addEventListener('click', () => {
                currentIndex = 0;
                const carouselDiv = document.getElementById("carousel-images"+index);
                images = carouselDiv.querySelectorAll("img");
                modals[index].showModal();
            })
        })

        Array.from(modals).forEach((modal) => {
            modal.addEventListener('click', (event) => {
                // Check if the clicked element is the dialog itself (outside of the content area)
                if (event.target === modal) {
                    modal.close();
                }
            })
        })

        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        console.log(document.getElementsByClassName('left'));
        Array.from(document.getElementsByClassName('left')).forEach((left) => {
            left.addEventListener('click', prevImage)
        })
        Array.from(document.getElementsByClassName('right')).forEach((right) => {
            right.addEventListener('click', nextImage)
        })

        // Boutons pour slider des testimonials
        const testimonialContainer = document.getElementById('cardTestimonialContainer');
        const prevButton = document.getElementById('leftTestimonials')
        const nextButton = document.getElementById('rightTestimonials')
        const containerWidth = testimonialContainer.getBoundingClientRect().width;

        nextButton.addEventListener('click', () => {
            testimonialContainer.scrollLeft += containerWidth
        })
        prevButton.addEventListener('click', () => {
            testimonialContainer.scrollLeft -= containerWidth
        })
    }, []);
    return (
        <div className="Testimonials" id='Testimonials'>
            <h2 className="hidden">
                Some of the feedbacks over the last 2 months
            </h2>
            <div className='sliderContainer'>
            <button class="TestimonialsButton leftTesti" id='leftTestimonials'>&#10094;</button>
            
            <div className='cardTestimonialContainer' id='cardTestimonialContainer'>
                <div className="cardTestimonial" id='cardTestimonial0'>
                    <div className='mainTestimonial'>
                        <a>Khéops</a>
                        <hr />
                        <img className='imageTestimonial' src={kheopsThumbnail} alt="daliushThumb" />
                    </div>
                </div>

                <div className="cardTestimonial" id='cardTestimonial1'>
                    <div className='mainTestimonial'>
                        <a>Elyfro</a>
                        <hr />
                        <img className='imageTestimonial' src={elyfroThumbnail} alt="ElyfroThumb" />
                    </div>
                </div>

                <div className="cardTestimonial" id='cardTestimonial2'>
                    <div className='mainTestimonial'>
                        <a>Fianso</a>
                        <hr />
                        <img className='imageTestimonial' src={fiansoThumbnail} alt="ElyfroThumb" />
                    </div>
                </div>

                <div className="cardTestimonial" id='cardTestimonial3'>
                    <div className='mainTestimonial'>
                        <a>Light</a>
                        <hr />
                        <img className='imageTestimonial' src={lightThumbnail} alt="ElyfroThumb" />
                    </div>
                </div>
            </div>
            <button class="TestimonialsButton rightTesti" id='rightTestimonials'>&#10095;</button>
                
            </div>
            <dialog className='modal' id='modal1'>
                <button class="carousel-button left" id='left1'>&#10094;</button>
                <button class="carousel-button right" id='right1'>&#10095;</button>
                <div class="carousel-container">

                    <div class="carousel-images" id='carousel-images0'>
                        <img src={kheops1} alt="kheops1" class="carousel-image active" />
                        <img src={kheops2} alt="kheops2" class="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal2'>
                <button class="carousel-button left" id='left2'>&#10094;</button>
                <button class="carousel-button right" id='right2'>&#10095;</button>
                <div class="carousel-container">

                    <div class="carousel-images" id='carousel-images1'>
                        <img src={elyfro1} alt='elyfro1' class="carousel-image active" />
                        <img src={elyfro2} alt='elyfro2' class="carousel-image" />
                        <img src={elyfro3} alt='elyfro3' class="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal3'>
                <button class="carousel-button left" id='left3'>&#10094;</button>
                <button class="carousel-button right" id='right3'>&#10095;</button>
                <div class="carousel-container">

                    <div class="carousel-images" id='carousel-images2'>
                        <img src={fianso1} alt='fianso1' class="carousel-image active" />
                        <img src={fianso2} alt='fianso2' class="carousel-image" />
                        <img src={fianso3} alt='fianso3' class="carousel-image" />
                        <img src={fianso4} alt='fianso4' class="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal4'>
                <button class="carousel-button left" id='left4'>&#10094;</button>
                <button class="carousel-button right" id='right4'>&#10095;</button>
                <div class="carousel-container">

                    <div class="carousel-images" id='carousel-images3'>
                        <img src={light1} alt='light1' class="carousel-image active" />
                    </div>

                </div>
            </dialog>
        </div>
    );
}

export default Testimonials;