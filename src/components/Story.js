import './css/Story.css';
import './css/Home.css';
import lobby1 from '../images/lobby1.png'
import lobby2 from '../images/lobby2.png'
import lobby3 from '../images/lobby3.png'
import lobby4 from '../images/lobby4.png'
import quotes from '../images/quotes.png'
import tengen from '../images/tengenSmiling.jpg'
function Story() {
    return (
        <div className='StoryPage'>
            <div className='imagesTop'>
                <div className='imgFlouContainer'>
                <img className='imgFlou' src={tengen}></img>
                </div>
                <div className='imageCenter'>
                <img className='imgNormal' src={tengen}></img>
                </div>
            </div>
            <div className="StoryBody" id='StoryBody'>

                <div className='story'>

                    <img src={quotes} className='quotes quoteStart'></img>
                    <p className='titleStory'>
                        La plupart des coachs Challenger ont fait exactement comme vous, ils ont spammé les games et obtenu un résultat différent.
                    </p>
                    <p className='contentStory'>
                        Moi spammer les games ça m'a pas amené plus loin que D4, peu importe mon acharnement et le nombre de vidéos youtube.
                        <br></br>-&gt; J'ai du chercher toutes les connaissances dans la psychologie de maximisation de performances pendant plusieurs années, appris de coach parmis les meilleurs au monde dans quasi tous les rôles pour rien laisser au hasard sur mes offroles du moment et par faim de connaissances.
                        <br></br>-&gt; C'est ce qui m'a permis de monter rang 512 en EUW.
                        <br></br><br></br>Savoir consciemment créer des résultats qui peuvent être répétés pour la vaste majorité des joueurs.
                    </p>

                    <p className='titleStory'>
                        C'est un peu difficile d'apprendre à quelqu'un à faire ce qu'on a pas fait soi-même.
                    </p>

                    <p className='contentStory'>
                        -&gt; C'est à dire complètement détruire son plafond de verre (soi-disant DNA gap).
                        <br></br>-&gt; Mais j'ai été obligé de le faire pour atteindre le Haut Grandmaster 689LP après 5 ans sans pouvoir sortir du low Diamant.
                    </p>

                    <p className='titleStory'>
                        Si je coachais le moi d'il y a 3 ans il l'aurait fait en 6 mois environ.                </p>

                    <p className='contentStory'>
                        Je suis absolument certain que vous ne trouverez nul part une méthodologie aussi efficace pour progresser et climb
                        D'autant que j'ai du développer des connaissances de Haut Challenger pour compenser un cerveau pour le moins distrait quand il s'agit de jouer.
                    </p>

                    <p className='contentStory'>
                        J'ai créé une académie pour créer des résultats insensés pour la plupart des joueurs, le tout dans une atmosphère saine où tout le monde veut progresser. D'autant que je connais le fond du problème et comment le régler et les coachs qui déblatèrent des connaissances inefficaces m'exaspérait.
                        Je forme notamment des joueurs qui seront mes futurs coach et ils pourront perpétuer ma philosophie dans l'académie quand je serai plus occupé à niveau pro.
                    </p>

                    <p className='contentStory'>
                        Ma méthodologie marche très efficacement sur tous mes étudiants investis, de tous rôles, de tous rangs, alors pourquoi pas toi?
                        <br></br>Si t'es prêt à remettre en question ce que tu crois savoir et la dalle de progresser, mon académie est faite pour toi 🙂
                        <img src={quotes} className='quotes quoteEnd'></img>
                    </p>

                </div>
                <div className='imgLobby'>
                    <div className='imageItem'><img src={lobby1}></img></div>
                    <div className='imageItem hideMobile'><img src={lobby2}></img></div>
                    <div className='imageItem hideMobile'><img src={lobby3}></img></div>
                    <div className='imageItem hideMobile'><img src={lobby4}></img></div>
                </div>
            </div>
        </div>

    );
}

export default Story;