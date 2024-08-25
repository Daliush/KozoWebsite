import './css/WhoAmI.css';
import './css/Home.css';
import KozoIRL from '../images/KozoIRL.png';
function WhoAmI() {
    return (
        <div className="WhoAmIText">

            <h2 className="hidden">Why am i the coach you need ?</h2>
            <div className='ImageText hidden'>
                <div className='ImageTextItem imageContainer'>
                    <img className='imageWhoAmI' src = {KozoIRL}></img>
                </div>
                <div className='ImageTextItem textContainer'>
                    <p className="hiddenRight textWhoAmI">&gt; I quit college as 50% wr d4 hardstuck for 5 years, because I had a vision</p>
                    <p className="hiddenRight textWhoAmI">&gt; I'm the coach I wish I met...</p>
                    <p className="hiddenRight textWhoAmI">&gt; No wonder I had to find anything and everything I could find to improve to reach High GM</p>
                    <p className='hiddenRight textWhoAmI'>&gt; Take things to the next level through the most effective process I could find to 10x your "genetic ceiling"</p>
                </div>
            </div>

        </div>


    );
}

export default WhoAmI;