import './css/AboutMe.css';
import './css/Home.css';
import Story from './Story';
import Book from './Book';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function AboutMe() {

  const location = useLocation();

    useEffect(() => {
    // Scroll to the element with ID that matches the hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("showStory")
            } else {
              entry.target.classList.remove("showStory")
            }
          }))
        })
        const hiddenElems = document.querySelectorAll(".hiddenStory");
        hiddenElems.forEach((el) => observer.observe(el));

      }, [location]);
    return (
        <div className="AboutMe">
                <Story/>
            <section>
                <Book/>
            </section>
        </div>
    );
}

export default AboutMe;