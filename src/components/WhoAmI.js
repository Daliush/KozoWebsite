import './css/WhoAmI.css';
import './css/Home.css';
import KozoIRL from '../images/KozoIRL.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function WhoAmI() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const aboutMeClick = () => {
        navigate('/aboutMe#StoryPage')
    }
    return (
        <div className="WhoAmIText">

            <h2 className="hidden">{t('whyAmI')}</h2>
            <div className='WhyAmIContainer'>
                <div className='ImageText hidden'>
                    <div className='ImageTextItem imageContainer'>
                        <img className='imageWhoAmI' src={KozoIRL}></img>
                    </div>
                    <div className='ImageTextItem textContainer'>
                        <p className="hiddenRight textWhoAmI">&gt; {t('quitCollege')} </p>
                        <p className="hiddenRight textWhoAmI">&gt; {t('vision')}  </p>
                        <p className="hiddenRight textWhoAmI">&gt; {t('coachWishIMet')} </p>
                        <p className="hiddenRight textWhoAmI">&gt; {t('reachHighGM')} </p>
                        <p className='hiddenRight textWhoAmI'>&gt; {t('takeThingsToTheNextLevel')} </p>
                    </div>
                </div>
                <p className='learnMore' onClick={aboutMeClick}><u>&#8599; {t('learnMore')}</u></p>
            </div>

        </div>


    );
}

export default WhoAmI;