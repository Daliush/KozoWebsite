import './css/WhoAmI.css';
import './css/Home.css';
import KozoIRL from '../images/KozoStanding.jpg';
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
            <h2 className="hidden section-title">{t('whyAmI')}</h2>
            <div className='WhyAmIContainer'>
                <div className='ImageText hidden'>
                    <div className='ImageTextItem imageContainer'>
                        <img className='imageWhoAmI' src={KozoIRL} alt="Kozo Professional Coach"></img>
                    </div>
                    <div className='ImageTextItem textContainer'>
                        <div className="professional-points">
                            <div className="point-item hiddenRight">
                                <div className="point-icon">
                                    <div className="icon-checkmark">✓</div>
                                </div>
                                <div className="point-content">
                                    <span dangerouslySetInnerHTML={{
                                        __html: t('whyAmI1', { interpolation: { escapeValue: false } })
                                    }}></span>
                                </div>
                            </div>

                            <div className="point-item hiddenRight">
                                <div className="point-icon">
                                    <div className="icon-checkmark">✓</div>
                                </div>
                                <div className="point-content">
                                    <span dangerouslySetInnerHTML={{
                                        __html: t('whyAmI2', { interpolation: { escapeValue: false } })
                                    }}></span>
                                </div>
                            </div>

                            <div className="point-item hiddenRight">
                                <div className="point-icon">
                                    <div className="icon-checkmark">✓</div>
                                </div>
                                <div className="point-content">
                                    <span dangerouslySetInnerHTML={{
                                        __html: t('whyAmI3', { interpolation: { escapeValue: false } })
                                    }}></span>
                                </div>
                            </div>

                            <div className="point-item hiddenRight">
                                <div className="point-icon">
                                    <div className="icon-checkmark">✓</div>
                                </div>
                                <div className="point-content">
                                    <span dangerouslySetInnerHTML={{
                                        __html: t('whyAmI4', { interpolation: { escapeValue: false } })
                                    }}></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="cta-section hiddenRight">
                    <button className="learn-more-btn" onClick={aboutMeClick}>
                        <span>{t('learnMore')}</span>
                        <div className="btn-arrow">→</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WhoAmI;