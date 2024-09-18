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
        <div className='StoryPage' id='StoryPage'>
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
                    Most Challenger coaches did exactly what you did: they spammed games and got a different result.                    </p>
                    <p className='contentStory'>
                    For me, spamming games <b>didn’t take me further than D4</b>, no matter how <b>persistent</b> I was or how many YouTube videos I watched.
                        <br></br>-&gt; I had to search for all the <b>knowledge</b> in <b>performance maximization</b> psychology for several years, learning from some of the <b>best coaches in the world</b> in nearly all roles to <b>leave nothing to luck</b> on my off-roles at the time and out of a <b>hunger for knowledge</b>.
                        <br></br>-&gt; This is what allowed me to climb to rank 512 in EUW.
                        <br></br><br></br><b>Consciously</b> knowing how to create results that can be <b>repeated</b> for the vast majority of players.
                    </p>

                    <p className='titleStory'>
                    It's a bit difficult to teach someone to do something you haven't done yourself. 
                    </p>

                    <p className='contentStory'>
                        -&gt; Meaning, <b>completely breaking through your glass ceiling</b> (the so-called DNA gap). 
                        <br></br>-&gt; But I had to do it to reach <b>High Grandmaster at 689 LP</b> after 5 years of being stuck in <b>low Diamond.</b>
                    </p>

                    <p className='titleStory'>
                    If I coached the me of 3 years ago, he would have done it in about 6 months.
                    </p>

                    <p className='contentStory'>
                    I am <b>absolutely certain</b> that you won't find a methodology <b>anywhere else</b> as <b>effective</b> for <b>improving and climbing.</b> 
                    Especially since I had to develop <b>High Challenger-level knowledge</b> to compensate for a brain that’s, to say the least, easily <b>distracted</b> when it comes to playing.
                    </p>

                    <p className='contentStory'>
                    I created an <b>academy</b> to produce <b>insane results</b> for most players, all in a <b>healthy atmosphere</b> where everyone wants to <b>improve</b>. I know the <b>root of the problem</b> and how to <b>solve it</b>, and coaches spouting <b>ineffective knowledge would drive me crazy</b>.
                    I’m <b>training</b> players who will be my <b>future coaches</b>, and they will carry on my <b>philosophy</b> in the academy when I’m busy at the <b>pro level</b>.
                    </p>

                    <p className='contentStory'>
                    <b>My methodology works very effectively on all my committed students, of all roles, of all ranks, so why not you?</b>
                        <br></br>If you're ready to question what you think you know and have the hunger to improve, my academy is made for you. 🙂
                        <img src={quotes} className='quotes quoteEnd'></img>
                    </p>
                    <p>
                        <i>Kozo</i>
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