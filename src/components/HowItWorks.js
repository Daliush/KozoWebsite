import './css/HowItWorks.css';
import './css/Home.css';
import { useTranslation } from 'react-i18next';
function HowItWorks() {
    const { t, i18n } = useTranslation();

    return (
        <div className="HowItWorks">
            <h2 className="hidden">
            {t('howItWorks')} 
            </h2>
            <div className="Steps">
                <div className="StepsItem Book hiddenRight">
                    <h3 className="StepTitle">{t('book')} </h3>
                    <p>{t('book1')} </p>
                </div>

                <div className="StepsItem Learn hiddenRight">
                <h3 className="StepTitle">{t('learn')} </h3>
                <p>{t('learn1')} </p>
                <p>{t('learn2')}</p>
                <p>{t('learn3')}</p>
                <p dangerouslySetInnerHTML={{__html : t('learn4', {interpolation: {escapeValue: false}})}}></p>

                </div>

                <div className="StepsItem Result hiddenRight">
                <h3 className="StepTitle">{t('obtainResults')}</h3>
                <p>{t('obtainResults1')}</p>
                <p>{t('obtainResults2')} </p>
                <p>{t('obtainResults3')}</p>
                </div>
            </div>

        </div>
    );
}

export default HowItWorks;