import './css/Menu.css';
import './css/Home.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from '../images/logo.png';
function Menu() {
    const navigate = useNavigate();
    const location = useLocation();

    const bookNowClick = () => {
        navigate('/KozoWebsite/aboutMe#bookNow')
    }

    const aboutMeClick = () => {
        navigate('/KozoWebsite/aboutMe#StoryBody')
    }

    const logoClick = () => {
        navigate('/KozoWebsite/#welcome')
    }

    const academyClick = () => {
        navigate('/KozoWebsite/academy')
    }

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, []);
    return (
        <div className='Menu'>
            <header class="header" id='navbar'>
                <div className='logoHome' onClick={logoClick}>
                    <img class="logo" src={logo} />
                    {
                        (
                            location.pathname.includes("aboutMe") ||
                            location.pathname.includes("academy")
                        )
                        && <a className='homeA'><u>Home</u></a>
                    }
                </div>
                <i class='bx bx-menu' id="menu-icon"></i>
                <nav class="navbar">
                    <a onClick={academyClick} class="lien link--mneme">The Academy</a>
                    <a onClick={aboutMeClick} class="lien link--mneme">About Me</a>
                    <a onClick={bookNowClick} className='bookNowButtonMenu'>Book</a>
                </nav>
            </header>
        </div>
    )
}

export default Menu;