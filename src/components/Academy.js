import './css/Academy.css';
import './css/Home.css';
import { useEffect } from 'react';
import myImage from '../images/tengenSmiling.jpg';
import logo from '../images/logo.png';
function Academy() {

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

      }, []);
    return (
        <div className="TheAcademy">
            <div className='AcademyItem DoneWith'>
                <div className='text leftText'>
                    <p>Are you done with having teammates that play like garbage and thinking to yourself, how can I have the same rank as those people?</p>
                    <p>If it often times feel like it's impossible to win yet you gave your all?</p>
                    <p>And then you lose motivation and play even worse.</p>
                    <p>-You sometimes think that there is got to be something wrong with the way you play, but you can't fully grasp what it is.</p>
                </div>
                <div className='image'>
                <img className='imageText' src = {myImage}></img>
                </div>
            </div>
            <div className='AcademyItem Then'>
                <div className='text'>
                <p>Then you've come to the right place.</p>
                    <p>The pillar of my coaching is clarity. Because I believe clarity is key. </p>
                    <p>And the opposite of clarity brings frustration, suffering and delusion.</p>
                    <p>I had to make things so clear in my mind in order to get the kind of results that I got. And 99,99% of people would've never even reached master with the level of attention I had. This is why I had to change my thought process from the inside out, and see precisely what is wrong in my gameplay in order to fix it. And then I did, over and over again</p>
                </div>
                <div className='image'>
                <img className='imageText' src = {logo}></img>
                </div>
            </div>
            <div className='AcademyItem KTLConstruction'>
                <div className='text'>
                    <p>lorem ipsum mes couilles là</p>
                </div>
                <div className='joinUs'>
                    <button>Stay informed in our discord</button>
                </div>
            </div>
        </div>
    );
}

export default Academy;