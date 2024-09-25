import './css/Welcome.css';
import './css/Home.css';
import { useTranslation } from 'react-i18next';
function Welcome() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng); // Change the language dynamically
    };
    return (
        <div className="WelcomeText">
                <a className="BurningText hidden">{t('intro')}</a>
        </div>
    );
}

export default Welcome;