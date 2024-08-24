import './css/Home.css';
import Welcome from './Welcome';
import React, { useEffect } from 'react';
import WhoAmI from './WhoAmI';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import { useLocation } from 'react-router-dom';

function Home() {

  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      }))
    })
    const hiddenElems = document.querySelectorAll(".hidden");
    hiddenElems.forEach((el) => observer.observe(el));

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showRight")
        }
      }))
    })
    const hiddenElemsRight = document.querySelectorAll(".hiddenRight");
    hiddenElemsRight.forEach((el) => observer2.observe(el));


        // Scroll to the element with ID that matches the hash in the URL
        if (location.hash) {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    


  }, [location]);


  return (
    <div className="App">
      <div className="App-body">
        <section id='welcome'>
          <div><Welcome /></div>
        </section>
        <section>
          <div><WhoAmI /></div>
        </section>
        <section>
          <div><HowItWorks /></div>
        </section>
        <section>
          <div><Testimonials /></div>
        </section>
      </div>
    </div>
  );
}

export default Home;
