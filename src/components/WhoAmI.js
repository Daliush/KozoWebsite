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
                        <p className="hiddenRight textWhoAmI"><a dangerouslySetInnerHTML={{ __html: t('whyAmI1', { interpolation: { escapeValue: false } }) }}></a> </p>
                        <p className="hiddenRight textWhoAmI"><a dangerouslySetInnerHTML={{ __html: t('whyAmI2', { interpolation: { escapeValue: false } }) }}></a> </p>
                        <p className="hiddenRight textWhoAmI"><a dangerouslySetInnerHTML={{ __html: t('whyAmI3', { interpolation: { escapeValue: false } }) }}></a> </p>
                        <p className="hiddenRight textWhoAmI"><a dangerouslySetInnerHTML={{ __html: t('whyAmI4', { interpolation: { escapeValue: false } }) }}></a> </p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default WhoAmI;