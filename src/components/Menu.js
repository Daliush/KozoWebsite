import './css/Menu.css';
import './css/Home.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
function Menu() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const bookNowClick = () => {
        navigate('/aboutMe#bookNow')
    }

    const aboutMeClick = () => {
        navigate('/aboutMe#StoryPage')
    }

    const logoClick = () => {
        navigate('/#welcome')
    }

    const academyClick = () => {
        navigate('/academy#beginning')
    }

    function showSidebar() {
        document.getElementById('sidebar').style.display = 'flex';
    }

    
    function closeSidebar() {
        document.getElementById('sidebar').style.display = 'none';
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
            <header className="header" id='navbar'>
                <div className='logoHome' onClick={logoClick}>
                    <img className="logo" src={logo} />
                    {
                        (
                            location.pathname.includes("aboutMe") ||
                            location.pathname.includes("academy")
                        )
                        && <a className='homeA'><u>Home</u></a>
                    }
                </div>
                <i className='bx bx-menu' id="menu-icon"></i>
                <nav className="navbar">
                    <a onClick={academyClick} className="lien link--mneme">{t('academy')}</a>
                    <a onClick={aboutMeClick} className="lien link--mneme">{t('aboutMe')}</a>
                    <a onClick={bookNowClick} className='bookNowButtonMenu'>{t('book')}</a>
                    <a onClick={showSidebar} className='showSidebar'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="35px" fill="#ffffff"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                        </a>
                </nav>
            </header>
            <nav className="sidebar" id='sidebar'>
            <div className='sideBarItem' onClick={closeSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg></div>
                    <div className='sideBarItem sidebarLink'><a onClick={academyClick} className="">{t('academy')}</a></div>
                    <div className='sideBarItem sidebarLink'><a onClick={aboutMeClick} className="">{t('aboutMe')}</a></div>
            </nav>
        </div>
    )
}

export default Menu;