import './css/AboutMe.css';
import './css/Home.css';
import Story from './Story';
import Book from './Book';
import React, { useEffect } from 'react';
function AboutMe() {
    useEffect(() => {
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

      }, []);
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