import './css/Academy.css';
import './css/Home.css';
import { useEffect } from 'react';
import myImage from '../images/tengenSmiling.jpg';
import logo from '../images/logo.png';
import underConstruction from '../images/UnderConstruction.png'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Academy() {
    const location = useLocation();
    const { t } = useTranslation();

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

        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' , block: "center"});
            }
          }

    }, []);
    return (
        <div className="TheAcademy">
            <div id='beginning'></div>
            <div className='construction'>
                <h2>{t('academyTitle')}</h2>
                <img src={underConstruction} />
            </div>
            <div className='AcademyItem DoneWith'>
                <div className='text leftText'>
                    <p>&#10060; {t('bad1')}</p>
                    <p>&#10060; {t('bad2')}</p>
                    <p>&#10060; {t('bad3')}</p>
                    <p>&#10060; {t('bad4')}</p>
                </div>
                <div className='image'>
                    <img className='imageText' src={myImage}></img>
                </div>
            </div>
            <div className='AcademyItem Then'>
                <div className='text'>
                    <p>{t('solution1')}</p>
                    <p>{t('solution2')}</p>
                    <p>{t('solution3')}</p>
                    <p>{t('solution4')}</p>
                </div>
                <div className='image'>
                    <img className='imageText' src={logo}></img>
                </div>
            </div>
            <div className='AcademyItem KTLConstruction'>
                <div className='text discordText'>
                    <p>{t('discordText')}</p>
                    <a href='https://discord.gg/b3mEDGygQx' target='_blank'>
                    <img className="DiscordBanner" src="https://discordapp.com/api/guilds/1235496317955084308/widget.png?style=banner3" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Academy;