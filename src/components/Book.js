import './css/Book.css';
import './css/Home.css';
import myImage from '../images/galaxy-slayer-zed-splash.jpg';
function Book() {
    return (
        <div className="BookBody" id='bookNow'>
            <h2>
                Chose your plan
            </h2>
            <div className='cardContainer'>
                <div className="card">
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>Single hours</p>
                        <p className='description'>
                            Open your eyes with a single hour coaching session.
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>25 EUR</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>1 Hour</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                            <a href="https://discord.gg/gRtXBZCwjA" target='_blank'>
                                <div className='bookButton'>
                                    Book your plan
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>New Recruits</p>
                        <p className='description'>
                            1 hour discount for new recruits. Get a coaching cheaper
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>10 EUR</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>1 Hour</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                        <a href="https://discord.gg/vRVY932SgB" target='_blank'>
                                <div className='bookButton'>
                                    Book your plan
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='main'>
                        <img className='bookingImage' src={myImage} alt="bookingPhoto" />
                        <p className='h2Basic'>1 month plan</p>
                        <p className='description'>
                        Get a daily followup on your progress with one of the juicy monthly plans
                        </p>
                        <div className='bookingInfo'>
                            <div className="price">
                                <ins>€</ins>
                                <p>99 to 595,50 EUR</p>
                            </div>
                            <div className="duration">
                                <ins>◷</ins>
                                <p>1 Month</p>
                            </div>
                        </div>
                        <hr />
                        <div className='link'>
                        <a href="https://discord.gg/cdvtufDfQR" target='_blank'>
                                <div className='bookButton'>
                                    Book your plan
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