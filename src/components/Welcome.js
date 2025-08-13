import './css/Welcome.css';
import './css/Home.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Welcome() {
    const { t, i18n } = useTranslation();
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const text = t('intro');
        if (!text || text === 'intro') return; // Wait for translation to load
        
        setIsTyping(true);
        setDisplayedText('');
        
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                setIsTyping(false);
            }
        }, 50); // Typing speed

        return () => clearInterval(typeInterval);
    }, [t('intro')]);

    return (
        <div className="WelcomeContainer">
            <div className="WelcomeText">
                <h1 className="TypewriterText">
                    {displayedText}
                    <span className={`cursor ${isTyping ? 'blinking' : 'static'}`}>|</span>
                </h1>
                <div className="WelcomeSubtext">
                    <p className="ProfessionalSubtext hidden">{t('professionalCoaching')}</p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;