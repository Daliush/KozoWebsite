import React, { useEffect } from 'react';
import './css/ModalPlans.css'; // Nous créerons ce fichier pour les styles
import { useTranslation } from 'react-i18next';
import kozoMain from '../images/maitrise-kozo-main.png'

const ModalPlans = ({ closeModal }) => {
    const { t } = useTranslation();

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

    const openCalendlyPopup4H = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/kozostraininglegends/plan-au-mois',
            });
        } else {
            console.error("Calendly script not loaded");
        }
    };

    const openCalendlyPopup8H = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/kozostraininglegends/plan-au-mois-greater-impact-8h-2h',
            });
        } else {
            console.error("Calendly script not loaded");
        }
    };

    const openCalendlyPopup30H = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/kozostraininglegends/plan-au-mois-taking-over-30-5h',
            });
        } else {
            console.error("Calendly script not loaded");
        }
    };
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Image */}
                <img className="kozoMainImg" src={kozoMain} alt="Placeholder" />

                {/* Buttons */}
                <div className="modal-buttons">
                    <button onClick={openCalendlyPopup4H} className="button">{t('plan4H')}</button>
                    <button onClick={openCalendlyPopup8H} className="button">{t('plan8H')}</button>
                    <button onClick={openCalendlyPopup30H} className="button">{t('plan30H')}</button>
                </div>

                {/* Close Button */}
                <button className="close-button" onClick={closeModal}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ModalPlans;
