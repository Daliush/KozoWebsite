import './css/Story.css';
import './css/Home.css';
import { useEffect } from 'react';
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
        <div className="StoryBody" id='StoryBody'>
            <div className='sectionStoryLeft'>
                <h2 className='hiddenStory'>Introduction</h2>
                <p className='paragraphStory hiddenStory'>
                Most Challenger coaches did exactly what you did—they spammed games and got a different result.
                </p>
                <p className='paragraphStory hiddenStory'>
                For me, spamming games didn’t get me past D4, no matter how much I tried or how many YouTube videos I watched.
                </p>
            </div>
            <div className='sectionStoryRight'>
                <h2 className='hiddenStory'>The Awakening</h2>
                <p className='paragraphStory hiddenStory'>
                I had to seek out all the knowledge on performance maximization psychology for several years, learning from some of the best coaches in the world across nearly all roles to leave nothing to chance on my off-roles, driven by a hunger for knowledge. This is what allowed me to climb to rank 512 in EUW.
                </p>

            </div>
            <div className='sectionStoryLeft'>
                <h2 className='hiddenStory'>The Methodology: How I Broke Through My Limits</h2>
                <p className='paragraphStory hiddenStory'>
                Consciously knowing how to create repeatable results for the vast majority of players. It’s difficult to teach someone what you haven’t done yourself
                </p>
                <p className='paragraphStory hiddenStory'>
                Specifically, completely shattering your glass ceiling (the so-called DNA gap). But I had to do it to reach High Grandmaster 689 LP after 5 years of being stuck in low Diamond.
                </p>
            </div>
            <div className='sectionStoryRight'>
                <h2 className='hiddenStory'>Reflective Insight</h2>
                <p className='paragraphStory hiddenStory'>
                If I could coach myself from 3 years ago, I would have achieved it in about 6 months. I’m absolutely certain you won’t find a more effective methodology anywhere for improving and climbing.
                </p>
            </div>
            <div className='sectionStoryLeft'>
                <h2 className='hiddenStory'>The Academy: A Community that seeks Performance</h2>
                <p className='paragraphStory hiddenStory'>
                I created an academy to achieve insane results for most players, all within a healthy atmosphere where everyone wants to improve.
                </p>
                <p className='paragraphStory hiddenStory'>
                I deeply understand the root of the problem and how to solve it, and it exasperated me to see coaches spouting ineffective knowledge.
                </p>
            </div>
            <div className='sectionStoryRight'>
                <h2 className='hiddenStory'>Training Future Coaches: A Long-Term Vision</h2>
                <p className='paragraphStory hiddenStory'>
                I’m training players who will become my future coaches, so they can carry on my philosophy in the academy when I’m more focused on the pro level.
                </p>
            </div>
            <div className='sectionStoryLeft' >
                <h2 className='hiddenStory'>Join the Academy</h2>
                <p className='paragraphStory hiddenStory'>
                My methodology works very effectively for all my dedicated students, of all roles and all ranks, so why not you? If you’re ready to question what you think you know and have the hunger to improve, my academy is for you 🙂
                </p>
            </div>
        </div>
    );
}

export default Story;