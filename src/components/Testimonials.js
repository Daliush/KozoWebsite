import './css/Testimonials.css';
import './css/Home.css';
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
import Driak21Thumbnail from '../images/Driak21_thumbnail.png'
import Driak211 from '../images/Driak21_1.png'
import Driak212 from '../images/Driak21_2.png'
import Driak213 from '../images/Driak21_3.png'
import Driak214 from '../images/Driak21_4.png'
import frenchFlag from '../images/frenchFlag.png'
import ElToredoThumbnail from '../images/ElToredo_Thumbnail.png'
import ElToredo1 from '../images/ElToredo_1.png'
import ElToredo2 from '../images/ElToredo_2.png'
import NexoThumbnail from '../images/Nexo_thumbnail.png'
import Nexo1 from '../images/Nexo_1.png'
import Nexo2 from '../images/Nexo_2.png'
import Nexo3 from '../images/Nexo_3.png'
import Nexo4 from '../images/Nexo_4.png'
import Nexo5 from '../images/Nexo_5.png'
import Nexo6 from '../images/Nexo_6.png'
import Nexo7 from '../images/Nexo_7.png'
import Nexo8 from '../images/Nexo_8.png'
import PsykoThumbnail from '../images/Psyko_thumbnail.png'
import Psyko1 from '../images/Psyko_1.png'
import Psyko2 from '../images/Psyko_2.png'
import YoshiThumbnail from '../images/Yoshi_thumbnail.png'
import Yoshi1 from '../images/Yoshi_1.png'
import Yoshi2 from '../images/Yoshi_2.png'
import Yoshi3 from '../images/Yoshi_3.png'
import Yoshi4 from '../images/Yoshi_4.png'
import ukFlag from '../images/ukFlag.png'
import Driak215 from '../images/Driak21_5.png'
import ElToredo3 from '../images/ElToredo_3.png'
import elyfro4 from '../images/Elyfro_4.png'
import fianso5 from '../images/Fianso_5.png'
import kheops3 from '../images/Kheops_3.png'
import light2 from '../images/Light_2.png'
import Psyko3 from '../images/Psyko_3.png'
import Yoshi5 from '../images/Yoshi_5.png'
import BelbarbThumbnail from '../images/Belbarb_Thumbnail.png'
import Belbarb1 from '../images/Belbarb_1.png'
import Belbarb2 from '../images/Belbarb_2.png'
import Belbarb3 from '../images/Belbarb_3.png'
import Belbarb4 from '../images/Belbarb_4.png'
import Belbarb5 from '../images/Belbarb_5.png'
import NelwyrThumbnail from '../images/Nelwyr_Thumbnail.png'
import Nelwyr1 from '../images/Nelwyr_1.png'
import Nelwyr2 from '../images/Nelwyr_2.png'
import Nelwyr3 from '../images/Nelwyr_3.png'
import Nelwyr4 from '../images/Nelwyr_4.png'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
function Testimonials() {
    const { t } = useTranslation();
    useEffect(() => {

        const modals = document.getElementsByClassName('modal');
        const openModals = document.getElementsByClassName('cardTestimonial')
        let images;

        Array.from(openModals).forEach((openModal) => {
            openModal.addEventListener('click', () => {
                currentIndex = 0;
                const currentId = openModal.id.match(/\d+/g)[0];
                const carouselDiv = document.getElementById("carousel-images" + currentId);
                images = carouselDiv.querySelectorAll("img");
                document.getElementById("modal"+currentId).showModal();
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
    // CURRENT TESTIMONIAL ID = 10
    return (
        <div className="Testimonials" id='Testimonials'>
            <h2 className="hidden">
                {t('someFeedbacks')}
            </h2>
            <div className='sliderContainer'>
                <button className="TestimonialsButton leftTesti" id='leftTestimonials'>&#10094;</button>

                
                <div className='cardTestimonialContainer' id='cardTestimonialContainer'>
                    <div className="cardTestimonial" id='cardTestimonial6'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>NeXo</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={NexoThumbnail} alt="NexoThumb" />
                        </div>
                    </div>

                    <div className='cardTestimonialContainer' id='cardTestimonialContainer'>
                        <div className="cardTestimonial" id='cardTestimonial0'>
                            <div className='mainTestimonial'>
                                <div className='nameContainer'>
                                    <a>Driak21</a>
                                    <img src={ukFlag} alt="ukFlag" className='flag' />
                                </div>
                                <hr />
                                <img className='imageTestimonial' src={Driak21Thumbnail} alt="driakThumb" />
                            </div>
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial10'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Nelwyr</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={NelwyrThumbnail} alt="NelwyrThumb" />
                        </div>
                    </div>


                    <div className="cardTestimonial" id='cardTestimonial1'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Khéops</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={kheopsThumbnail} alt="kheopsThumb" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial2'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Elyfro</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={elyfroThumbnail} alt="ElyfroThumb" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial3'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Fianso</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={fiansoThumbnail} alt="FiansoThumb" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial4'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Light</a>
                                <img src={ukFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={lightThumbnail} alt="LightThumb" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial5'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>ElToredo</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={ElToredoThumbnail} alt="EltoredoThumb" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial7'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Yoshi</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={YoshiThumbnail} alt="YoshiThumbnail" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial8'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Psykokwak</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={PsykoThumbnail} alt="PsykoThumbnail" />
                        </div>
                    </div>

                    <div className="cardTestimonial" id='cardTestimonial9'>
                        <div className='mainTestimonial'>
                            <div className='nameContainer'>
                                <a>Belbarb</a>
                                <img src={frenchFlag} alt="frenchFlag" className='flag' />
                            </div>
                            <hr />
                            <img className='imageTestimonial' src={BelbarbThumbnail} alt="BelbarbThumbnail" />
                        </div>
                    </div>
                </div>
                
                <button className="TestimonialsButton rightTesti" id='rightTestimonials'>&#10095;</button>

            </div>









            <dialog className='modal' id='modal0'>
                <button className="carousel-button left" id='left0'>&#10094;</button>
                <button className="carousel-button right" id='right0'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images0'>
                        <img src={Driak211} alt="Driak211" className="carousel-image active" />
                        <img src={Driak215} alt="Driak215" className="carousel-image" />
                        <img src={Driak212} alt="Driak212" className="carousel-image" />
                        <img src={Driak213} alt="Driak213" className="carousel-image" />
                        <img src={Driak214} alt="Driak214" className="carousel-image" />
                    </div>

                </div>
            </dialog>
            <dialog className='modal' id='modal1'>
                <button className="carousel-button left" id='left2'>&#10094;</button>
                <button className="carousel-button right" id='right2'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images1'>
                        <img src={kheops1} alt="kheops1" className="carousel-image active" />
                        <img src={kheops3} alt="kheops3" className="carousel-image" />
                        <img src={kheops2} alt="kheops2" className="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal2'>
                <button className="carousel-button left" id='left3'>&#10094;</button>
                <button className="carousel-button right" id='right3'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images2'>
                        <img src={elyfro1} alt='elyfro1' className="carousel-image active" />
                        <img src={elyfro4} alt='elyfro4' className="carousel-image" />
                        <img src={elyfro2} alt='elyfro2' className="carousel-image" />
                        <img src={elyfro3} alt='elyfro3' className="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal3'>
                <button className="carousel-button left" id='left4'>&#10094;</button>
                <button className="carousel-button right" id='right4'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images3'>
                        <img src={fianso1} alt='fianso1' className="carousel-image active" />
                        <img src={fianso5} alt='fianso5' className="carousel-image" />
                        <img src={fianso2} alt='fianso2' className="carousel-image" />
                        <img src={fianso3} alt='fianso3' className="carousel-image" />
                        <img src={fianso4} alt='fianso4' className="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal4'>
                <button className="carousel-button left" id='left5'>&#10094;</button>
                <button className="carousel-button right" id='right5'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images4'>
                        <img src={light1} alt='light1' className="carousel-image active" />
                        <img src={light2} alt='light2' className="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal5'>
                <button className="carousel-button left" id='left6'>&#10094;</button>
                <button className="carousel-button right" id='right6'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images5'>
                        <img src={ElToredo1} alt='eltoredo1' className="carousel-image active" />
                        <img src={ElToredo3} alt='eltoredo3' className="carousel-image" />
                        <img src={ElToredo2} alt='eltoredo2' className="carousel-image" />
                    </div>

                </div>
            </dialog>


            <dialog className='modal' id='modal6'>
                <button className="carousel-button left" id='left7'>&#10094;</button>
                <button className="carousel-button right" id='right7'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images6'>
                        <img src={Nexo1} alt='nexo1' className="carousel-image active" />
                        <img src={Nexo2} alt='nexo2' className="carousel-image" />
                        <img src={Nexo3} alt='nexo3' className="carousel-image" />
                        <img src={Nexo4} alt='nexo4' className="carousel-image" />
                        <img src={Nexo5} alt='nexo5' className="carousel-image" />
                        <img src={Nexo6} alt='nexo6' className="carousel-image" />
                        <img src={Nexo7} alt='nexo7' className="carousel-image" />
                        <img src={Nexo8} alt='nexo8' className="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal7'>
                <button className="carousel-button left" id='left8'>&#10094;</button>
                <button className="carousel-button right" id='right8'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images7'>
                        <img src={Yoshi1} alt='Yoshi1' className="carousel-image active" />
                        <img src={Yoshi5} alt='Yoshi5' className="carousel-image" />
                        <img src={Yoshi2} alt='Yoshi2' className="carousel-image" />
                        <img src={Yoshi3} alt='Yoshi3' className="carousel-image" />
                        <img src={Yoshi4} alt='Yoshi4' className="carousel-image" />
                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal8'>
                <button className="carousel-button left" id='left9'>&#10094;</button>
                <button className="carousel-button right" id='right9'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images8'>
                        <img src={Psyko1} alt='Psyko1' className="carousel-image active" />
                        <img src={Psyko3} alt='Psyko3' className="carousel-image" />
                        <img src={Psyko2} alt='Psyko2' className="carousel-image" />

                    </div>

                </div>
            </dialog>


            <dialog className='modal' id='modal9'>
                <button className="carousel-button left" id='left10'>&#10094;</button>
                <button className="carousel-button right" id='right10'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images9'>
                        <img src={Belbarb1} alt='Belbarb1' className="carousel-image active" />
                        <img src={Belbarb2} alt='Belbarb2' className="carousel-image" />
                        <img src={Belbarb3} alt='Belbarb3' className="carousel-image" />
                        <img src={Belbarb4} alt='Belbarb4' className="carousel-image" />
                        <img src={Belbarb5} alt='Belbarb5' className="carousel-image" />

                    </div>

                </div>
            </dialog>

            <dialog className='modal' id='modal10'>
                <button className="carousel-button left" id='left11'>&#10094;</button>
                <button className="carousel-button right" id='right11'>&#10095;</button>
                <div className="carousel-container">

                    <div className="carousel-images" id='carousel-images10'>
                        <img src={Nelwyr1} alt='Nelwyr1' className="carousel-image active" />
                        <img src={Nelwyr2} alt='Nelwyr2' className="carousel-image" />
                        <img src={Nelwyr3} alt='Nelwyr3' className="carousel-image" />
                        <img src={Nelwyr4} alt='Nelwyr4' className="carousel-image" />

                    </div>

                </div>
            </dialog>
        </div>
    );
}

export default Testimonials;