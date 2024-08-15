import './css/HowItWorks.css';
import './css/Home.css';
function HowItWorks() {
    return (
        <div className="HowItWorks">
            <h2 className="hidden">
                How it works
            </h2>
            <div className="Steps">
                <div className="StepsItem Book hiddenRight">
                    <h3 className="StepTitle">Book</h3>
                    <p>Schedule your personal coaching session with me now</p>
                </div>

                <div className="StepsItem Learn hiddenRight">
                <h3 className="StepTitle">Learn</h3>
                <p>Show up to the coaching session</p>
                <p>Learn a very different and more effective approach to the game</p>
                <p>We will shift your belief system and process in order to program your mind for exponential results</p>
                <p>You will know way better what to pay attention to ingame and have a specific learning objective that you will <a className="underline">know</a> to be key to your climbing</p>

                </div>

                <div className="StepsItem Result hiddenRight">
                <h3 className="StepTitle">Obtain Results</h3>
                <p>Apply the process I've given you with intent</p>
                <p>See that you pay more attention to specific patterns and begin to improve on specific areas of  your gameplay. </p>
                <p>Eventually when 2 things connect, you break through and get massive results, only to struggle again at a higher rank</p>
                </div>
            </div>

        </div>
    );
}

export default HowItWorks;