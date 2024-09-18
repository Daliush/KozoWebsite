import './css/WhoAmI.css';
import './css/Home.css';
import KozoIRL from '../images/KozoIRL.png';
import { useNavigate } from 'react-router-dom';
function WhoAmI() {

    const navigate = useNavigate();

    const aboutMeClick = () => {
        navigate('/aboutMe#StoryPage')
    }
    return (
        <div className="WhoAmIText">

            <h2 className="hidden">Why am i the coach you need ?</h2>
            <div className='WhyAmIContainer'>
                <div className='ImageText hidden'>
                    <div className='ImageTextItem imageContainer'>
                        <img className='imageWhoAmI' src={KozoIRL}></img>
                    </div>
                    <div className='ImageTextItem textContainer'>
                        <p className="hiddenRight textWhoAmI">&gt; I quit college to go pro even though I was hardstuck D4 for 5 years and diagnosed with Attention Deficit Disorder </p>
                        <p className="hiddenRight textWhoAmI">&gt; Simply because I had a vision, I knew I would do whatever it takes. </p>
                        <p className="hiddenRight textWhoAmI">&gt; I'm the coach I wish I met 4 years ago, because I know my younger self would've made it in 6 months from D4 to High GM if I had been coaching him.</p>
                        <p className="hiddenRight textWhoAmI">&gt; No wonder I had to find anything and everything I could find to improve to reach High GM</p>
                        <p className='hiddenRight textWhoAmI'>&gt; Take things to the next level through the most effective process I could find to 10x your "genetic ceiling"</p>
                    </div>
                </div>
                <p className='learnMore' onClick={aboutMeClick}><u>&#8599; Learn more about me</u></p>
            </div>

        </div>


    );
}

export default WhoAmI;