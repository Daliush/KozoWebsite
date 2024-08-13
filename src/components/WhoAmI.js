import './css/WhoAmI.css';
import '../App.css'
function WhoAmI() {
    return (
        <div className="WhoAmIText">

            <h2 className="hidden">Who Am I ?</h2>
            <div className='ImageText hidden'>
                <div className='ImageTextItem imageContainer'>
                    <img className='imageWhoAmI' src = 'images/TengenSmiling.jpg'></img>
                </div>
                <div className='ImageTextItem textContainer'>
                    <p className="hiddenRight textWhoAmI">I'm Kozo.</p>
                    <p className="hiddenRight textWhoAmI">&gt; An ex hardstuck low Dia for 5 years who quit college to go pro and reached High Grandmaster despite ADD.</p>
                    <p className="hiddenRight textWhoAmI">&gt; I've spent over 3000 hours reviewing this game, about 1000 in coaching sessions.</p>
                    <p className='hiddenRight textWhoAmI'>&gt; I'm the coach I wish I met 4 years ago, because I know my younger self would've made it in 6 months from D4 to High GM if I had been coaching him.</p>
                </div>
            </div>

        </div>


    );
}

export default WhoAmI;