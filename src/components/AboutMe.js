import './css/AboutMe.css';
import './css/Home.css';
import Story from './Story';
import Book from './Book';
function AboutMe() {
    return (
        <div className="AboutMe">
            <section>
                <Story/>
            </section>
            <section>
                <Book/>
            </section>
        </div>
    );
}

export default AboutMe;