import './css/Book.css';
import './css/Home.css';
import myImage from '../images/galaxy-slayer-zed-splash.jpg';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ModalPlans from './ModalPlans';
function Book() {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction pour ouvrir le modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Fonction pour fermer le modal
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // Déclaration de l'objet Calendly pour TypeScript
  useEffect(() => {
    // Optionnel : Charger le script dynamiquement si vous ne l'avez pas ajouté dans index.html
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup1H = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kozostraininglegends/30min',
      });
    } else {
      console.error("Calendly script not loaded");
    }
  };


    return (
        <div className="BookBody" id='bookNow'>
            <h2>
                {t('chosePlan')}
            </h2>
            <div className='cardContainer'>
                <div className="card">
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>{t('singleHours')}</p>
                        <p className='description'>
                            {t('singleHoursDescr')}
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>35 EUR</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>{t('1Hour')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                            <a onClick={openCalendlyPopup1H}>
                                <div className='bookButton'>
                                {t('bookPlan')}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div class="banner">
                        <p>{t('upTo-30')}</p>
                    </div>
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>{t('1MonthPlan')}</p>
                        <p className='description'>
                        {t('1MonthDescr')}
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>{t('eurToEur')}</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>{t('1Month')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                            <a onClick={openModal}>
                                <div className='bookButton'>
                                {t('viewPlans')}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>{t('patreon')}</p>
                        <p className='description'>
                            {t('patreonDescr')}
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>9.99 EUR HT</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>{t('1Month')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                            <a href='https://www.patreon.com/c/Kozo77' target='_blank'>
                                <div className='bookButton'>
                                {t('patreonButton')}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                      {/* Composant ModalPlans */}
      {isModalOpen && <ModalPlans closeModal={closeModal} />}
            </div>
            
        </div>
    );
}

export default Book;