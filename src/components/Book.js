import './css/Book.css';
import './css/Home.css';
import myImage from '../images/galaxy-slayer-zed-splash.jpg';
import { useTranslation } from 'react-i18next';
function Book() {
    const { t } = useTranslation();
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
                                <p>20 EUR</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>{t('1Hour')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                            <a href="https://discord.gg/gRtXBZCwjA" target='_blank'>
                                <div className='bookButton'>
                                {t('bookPlan')}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div class="banner">
                        <p>{t('newRecruits')}</p>
                    </div>
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>{t('newRecruits')}</p>
                        <p className='description'>
                        {t('newRecruitsDescr')}
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>10 EUR</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>{t('1Hour')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                            <a href="https://discord.gg/gRtXBZCwjA" target='_blank'>
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
                            <a href="https://discord.gg/cdvtufDfQR" target='_blank'>
                                <div className='bookButton'>
                                {t('bookPlan')}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Book;