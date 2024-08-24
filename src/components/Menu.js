import './css/Menu.css';
import './css/Home.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from '../images/logo.png';
function Menu() {
    const navigate = useNavigate();

    const bookNowClick = () => {
        navigate('/aboutMe#bookNow')
    }

    const aboutMeClick = () => {
        navigate('/aboutMe#StoryBody')
    }

    const logoClick = () => {
        navigate('/#welcome')
    }

    const academyClick = () => {
        navigate('/academy')
    }
    useEffect(() => {
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const navbg = document.querySelector('.nav-bg');
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
            navbg.classList.toggle('active');
        });
      }, []);
    return (
        <div className='Menu'>
    <header class="header">
        <img onClick={logoClick} class="logo" src={logo}/>
        <i class='bx bx-menu' id="menu-icon"></i>
        <nav class="navbar">
            <a onClick={aboutMeClick} class="lien link--mneme">About Me</a>
            <a onClick={academyClick} class="lien link--mneme">The Academy</a>
            <a onClick={bookNowClick} class="lien link--mneme">Book Now</a>
        </nav>
    </header>
        </div>
    )
}

export default Menu;