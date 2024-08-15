import './css/Story.css';
import './css/Home.css';
function Story() {
    const story = `La plupart des coachs Challenger ont fait exactement comme vous, ils ont spammé les games et obtenu un résultat différent.

Moi spammer les games ça <a style = "text-decoration: underline">m'a</a> pas amené plus loin que D4, peu importe mon acharnement et le nombre de vidéos youtube.
-> J'ai du chercher toutes les connaissances dans la psychologie de maximisation de performances pendant plusieurs années, appris de coach parmis les meilleurs au monde dans quasi tous les rôles pour rien laisser au hasard sur mes offroles du moment et par faim de connaissances.
-> C'est ce qui m'a permis de monter rang 512 en EUW.

Savoir consciemment créer des résultats qui peuvent être répétés pour la vaste majorité des joueurs.


C'est un peu difficile d'apprendre à quelqu'un à faire ce qu'on a pas fait soi-même.
-> C'est à dire complètement détruire son plafond de verre (soi-disant DNA gap).
-> Mais j'ai été obligé de le faire pour atteindre le Haut Grandmaster 689LP après 5 ans sans pouvoir sortir du low Diamant.


Si je coachais le moi d'il y a 3 ans il l'aurait fait en 6 mois environ.
Je suis absolument certain que vous ne trouverez nul part une méthodologie aussi efficace pour progresser et climb
D'autant que j'ai du développer des connaissances de Haut Challenger pour compenser un cerveau pour le moins distrait quand il s'agit de jouer.


J'ai créé une académie pour créer des résultats insensés pour la plupart des joueurs, le tout dans une atmosphère saine où tout le monde veut progresser. D'autant que je connais le fond du problème et comment le régler et les coachs qui déblatèrent des connaissances inefficaces m'exaspérait. 
Je forme notamment des joueurs qui seront mes futurs coach et ils pourront perpétuer ma philosophie dans l'académie quand je serai plus occupé à niveau pro.

Ma méthodologie marche très efficacement sur tous mes étudiants investis, de tous rôles, de tous rangs, alors pourquoi pas toi?
Si t'es prêt à remettre en question ce que tu crois savoir et la dalle de progresser, mon académie est faite pour toi 🙂

Kozo`
    return (
        <div className="StoryBody">
            <p className='Story preserve-breaks' dangerouslySetInnerHTML={{__html: story}}/>
        </div>
    );
}

export default Story;