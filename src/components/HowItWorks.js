import './css/HowItWorks.css';
import './css/Home.css';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
function HowItWorks() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const bookNowClick = () => {
        navigate('/aboutMe#bookNow')
    }
    return (
        <div className="HowItWorks">
            <h2 className="hidden section-title">
            {t('howItWorks')} 
            </h2>
            <div className="Steps">
                <div className="StepsItem Book hiddenRight">
                    <h3 className="StepTitle">{t('bookBody')} </h3>
                    <p>
                        <span dangerouslySetInnerHTML={{ __html: t('book1', { interpolation: { escapeValue: false } }) }}></span> <a className='linkBook' onClick={bookNowClick}>{t('book1Link')}</a>
                    </p>
                    <p>
                        {t('book2')}
                    </p>
                    <p>
                        {t('book3')}
                    </p>
                    <p>
                        {t('book4')}
                    </p>
                </div>

                <div className="StepsItem Learn hiddenRight">
                <h3 className="StepTitle">{t('learn')} </h3>
                <p>{t('learn1')}</p>
                <p>{t('learn2')}</p>
                <p>{t('learn3')}</p>
                </div>

                <div className="StepsItem Result hiddenRight">
                <h3 className="StepTitle">{t('obtainResults')}</h3>
                <p>{t('obtainResults1')}</p>
                </div>
            </div>

        </div>
    );
}

export default HowItWorks;