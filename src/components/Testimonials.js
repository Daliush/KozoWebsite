import './css/Testimonials.css';
import './css/Home.css';
import daliushTestimonials from '../images/testimonialDaliush.png'
import zed from '../images/galaxy-slayer-zed-splash.jpg'
import tengen from '../images/tengenSmiling.jpg'
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
    }, []);
    return (
        <div className="Testimonials" id='Testimonials'>
            <h2 className="hidden">
                Some of the feedbacks over the last 2 months
            </h2>
            <div className='cardContainer'>
                <div className="cardTestimonial" id='cardTestimonial0'>
                    <div className='mainTestimonial'>
                        <a>Daliush</a>
                        <hr />
                        <img className='imageTestimonial' src={daliushTestimonials} alt="bookingPhoto" />
                    </div>
                </div>

                <div className="cardTestimonial" id='cardTestimonial1'>
                    <div className='mainTestimonial'>
                        <a>Daliush</a>
                        <hr />
                        <img className='imageTestimonial' src={daliushTestimonials} alt="bookingPhoto" />
                    </div>
                </div>
            </div>


            <dialog className='modal' id='modal1'>
                <button class="carousel-button left" id='left1'>&#10094;</button>
                <button class="carousel-button right" id='right1'>&#10095;</button>
                <div class="carousel-container">

                    <div class="carousel-images" id='carousel-images0'>
                        <img src={daliushTestimonials} alt="daliush1" class="carousel-image active" />
                        <img src={zed} alt="daliush2" class="carousel-image" />
                        <img src={tengen} alt="daliush3" class="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal2'>
                <button class="carousel-button left" id='left2'>&#10094;</button>
                <button class="carousel-button right" id='right2'>&#10095;</button>
                <div class="carousel-container">

                    <div class="carousel-images" id='carousel-images1'>
                        <img src={tengen} class="carousel-image active" />
                        <img src={tengen} class="carousel-image" />
                        <img src={tengen} class="carousel-image" />
                    </div>

                </div>
            </dialog>
        </div>
    );
}

export default Testimonials;