import './css/Testimonials.css';
import './css/Home.css';
import daliushTestimonials from '../images/testimonialDaliush.png'
import { useEffect } from 'react';
function Testimonials() {
    useEffect(() => {
        const openModal = document.getElementById('cardTestimonial');
        const modal = document.getElementById('modal');

        openModal.addEventListener('click', () => {
            modal.showModal();
        })

        modal.addEventListener('click', (event) => {
            // Check if the clicked element is the dialog itself (outside of the content area)
            if (event.target === modal) {
                modal.close();
            }
          })
    }, []);
    return (
        <div className="Testimonials">
            <h2 className="hidden">
                Some of the feedbacks over the last 2 months
            </h2>

            <div className="cardTestimonial" id='cardTestimonial'>
                <div className='mainTestimonial'>
                    <a>Daliush</a>
                    <hr />
                    <img className='imageTestimonial' src={daliushTestimonials} alt="bookingPhoto" />
                </div>
            </div>
            <dialog className='modal' id='modal'>
                <img src={daliushTestimonials}></img>
            </dialog>
        </div>
    );
}

export default Testimonials;