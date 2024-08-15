import './css/Book.css';
import './css/Home.css';
import myImage from '../images/galaxy-slayer-zed-splash.jpg';
function Book() {
    return (
        <div className="BookBody">
            <h2>
                Chose your plan
            </h2>
            <div className='cardContainer'>
            <div className="card">
                <div className='main'>
                    <img className='bookingImage' src={myImage} alt="NFT" />
                    <p className='h2Basic'>Single hours</p>
                    <p className='description'>
                        Open your eyes with a single hour coaching session.
                        </p>
                    <div className='bookingInfo'>
                        <div className="price">
                            <ins>€</ins>
                            <p>20 EUR</p>
                        </div>
                        <div className="duration">
                            <ins>◷</ins>
                            <p>1 Hour</p>
                        </div>
                    </div>
                    <hr />
                    <div className='link'>
                        <div className='bookButton'>
                            Book your plan
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className='main'>
                    <img className='bookingImage' src={myImage} alt="NFT" />
                    <p className='h2Basic'>1 month plan</p>
                    <p className='description'>
                        Get a daily follow up on your progress.
                        </p>
                    <div className='bookingInfo'>
                        <div className="price">
                            <ins>€</ins>
                            <p>99 to 754 EUR</p>
                        </div>
                        <div className="duration">
                            <ins>◷</ins>
                            <p>1 Month</p>
                        </div>
                    </div>
                    <hr />
                    <div className='link'>
                        <div className='bookButton'>
                            Book your plan
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className='main'>
                    <img className='bookingImage' src={myImage} alt="NFT" />
                    <p className='h2Basic'>Live review</p>
                    <p className='description'>
                        Let coach Kozo teach your while you're playing
                        </p>
                    <div className='bookingInfo'>
                        <div className="price">
                            <ins>€</ins>
                            <p>18 EUR</p>
                        </div>
                        <div className="duration">
                            <ins>◷</ins>
                            <p>1 Game</p>
                        </div>
                    </div>
                    <hr />
                    <div className='link'>
                        <div className='bookButton'>
                            Book your plan
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Book;