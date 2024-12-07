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
            <h2 className="hidden">
            {t('howItWorks')} 
            </h2>
            <div className="Steps">
                <div className="StepsItem Book hiddenRight">
                    <h3 className="StepTitle">{t('bookBody')} </h3>
                    <p>
                        <a dangerouslySetInnerHTML={{ __html: t('book1', { interpolation: { escapeValue: false } }) }}></a>  <a className='linkBook' onClick={bookNowClick}>{t('book1Link')}</a>
                    </p>
                </div>

                <div className="StepsItem Learn hiddenRight">
                <h3 className="StepTitle">{t('learn')} </h3>
                <p dangerouslySetInnerHTML={{ __html: t('learn1', { interpolation: { escapeValue: false } }) }}></p>
                </div>

                <div className="StepsItem Result hiddenRight">
                <h3 className="StepTitle">{t('obtainResults')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('obtainResults1', { interpolation: { escapeValue: false } }) }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('obtainResults2', { interpolation: { escapeValue: false } }) }}></p>
                </div>
            </div>

        </div>
    );
}

export default HowItWorks;