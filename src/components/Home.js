import './css/Home.css';
import Welcome from './Welcome';
import React, { useEffect } from 'react';
import WhoAmI from './WhoAmI';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';

function Home() {
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
        } else {
          entry.target.classList.remove("showRight")
        }
      }))
    })
    const hiddenElemsRight = document.querySelectorAll(".hiddenRight");
    hiddenElemsRight.forEach((el) => observer2.observe(el));
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <section>
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
