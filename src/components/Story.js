import './css/Story.css';
import './css/Home.css';
import lobby1 from '../images/lobby1.png'
import lobby2 from '../images/lobby2.png'
import lobby3 from '../images/lobby3.png'
import lobby4 from '../images/lobby4.png'
import quotes from '../images/quotes.png'
import tengen from '../images/tengenSmiling.jpg'
import { useTranslation } from 'react-i18next';
function Story() {
    const { t } = useTranslation();
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
                        {t('title1')}
                    </p>
                    <p className='contentStory'>
                        <a dangerouslySetInnerHTML={{__html : t('body11', {interpolation: {escapeValue: false}})}}></a>
                        <br></br><a dangerouslySetInnerHTML={{__html : t('body12', {interpolation: {escapeValue: false}})}}></a>
                        <br></br><a dangerouslySetInnerHTML={{__html : t('body13', {interpolation: {escapeValue: false}})}}></a>
                        <br></br><br></br><a dangerouslySetInnerHTML={{__html : t('body14', {interpolation: {escapeValue: false}})}}></a>
                    </p>

                    <p className='titleStory'>
                        {t('title2')}
                    </p>

                    <p className='contentStory'>
                    <a dangerouslySetInnerHTML={{__html : t('body21', {interpolation: {escapeValue: false}})}}></a>
                        <br></br><a dangerouslySetInnerHTML={{__html : t('body22', {interpolation: {escapeValue: false}})}}></a>
                    </p>

                    <p className='titleStory'>
                        {t('title3')}
                    </p>

                    <p className='contentStory'>
                    <a dangerouslySetInnerHTML={{__html : t('body31', {interpolation: {escapeValue: false}})}}></a>
                    </p>

                    <p className='contentStory'>
                    <a dangerouslySetInnerHTML={{__html : t('body32', {interpolation: {escapeValue: false}})}}></a>
                    <a dangerouslySetInnerHTML={{__html : t('body33', {interpolation: {escapeValue: false}})}}></a>                    </p>

                    <p className='contentStory'>
                    <a dangerouslySetInnerHTML={{__html : t('body34', {interpolation: {escapeValue: false}})}}></a>
                    <a dangerouslySetInnerHTML={{__html : t('body35', {interpolation: {escapeValue: false}})}}></a>
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