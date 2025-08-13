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
                    <p className='titleStory' dangerouslySetInnerHTML={{ __html: t('title1', { interpolation: { escapeValue: false } }) }}>
                    </p>
                    <p className='contentStory'>
                        <div className='borderGreyLeft'>
                            <div className='onLeft'>
                                <a dangerouslySetInnerHTML={{ __html: t('body11', { interpolation: { escapeValue: false } }) }}></a>
                                <br></br><a dangerouslySetInnerHTML={{ __html: t('body12', { interpolation: { escapeValue: false } }) }}></a>
                                <br></br><a dangerouslySetInnerHTML={{ __html: t('body13', { interpolation: { escapeValue: false } }) }}></a>
                                <br></br><a dangerouslySetInnerHTML={{ __html: t('body14', { interpolation: { escapeValue: false } }) }}></a>

                                <br></br><br></br><a dangerouslySetInnerHTML={{ __html: t('body15', { interpolation: { escapeValue: false } }) }}></a>
                            </div>
                        </div>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body16', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body17', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body18', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body19', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body110', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body111', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body112', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body113', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body114', { interpolation: { escapeValue: false } }) }}></a>

                    </p>

                    <p className='titleStory' dangerouslySetInnerHTML={{ __html: t('title2', { interpolation: { escapeValue: false } }) }}>
                    </p>

                    <p className='contentStory'>
                        <a dangerouslySetInnerHTML={{ __html: t('body21', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body22', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body23', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body24', { interpolation: { escapeValue: false } }) }}></a>
                        <br></br>
                        <br></br><a dangerouslySetInnerHTML={{ __html: t('body25', { interpolation: { escapeValue: false } }) }}></a>


                    </p>

                    <p className='titleStory' dangerouslySetInnerHTML={{ __html: t('title3', { interpolation: { escapeValue: false } }) }}>
                    </p>

                    <p className='contentStory'>
                        <div className='borderGreyLeft'>
                            <div className='onLeft'>
                            <a dangerouslySetInnerHTML={{ __html: t('body31', { interpolation: { escapeValue: false } }) }}></a>
                            <br></br>
                            <a dangerouslySetInnerHTML={{ __html: t('body32', { interpolation: { escapeValue: false } }) }}></a>
                            <br></br>
                            <a dangerouslySetInnerHTML={{ __html: t('body33', { interpolation: { escapeValue: false } }) }}></a>
                            <br></br>
                            <a dangerouslySetInnerHTML={{ __html: t('body34', { interpolation: { escapeValue: false } }) }}></a>
                            <br></br>

                            </div>
                        </div>
                        <br></br>
                            <a dangerouslySetInnerHTML={{ __html: t('body35', { interpolation: { escapeValue: false } }) }}></a>

                        <img src={quotes} className='quotes quoteEnd'></img>
                    </p>
                    <p>
                        <i><b>Kozo</b></i>
                    </p>

                </div>

                <div className='images'>
                <div className='imgLobby'>
                    <div className='imageItem'><img src={lobby1}></img></div>
                    <div className='imageItem hideMobile'><img src={lobby2}></img></div>
                    <div className='imageItem hideMobile'><img src={lobby3}></img></div>
                    <div className='imageItem hideMobile'><img src={lobby4}></img></div>
                </div>
                <p className='contentStory' style={{textAlign: 'center'}}>
                        <a  dangerouslySetInnerHTML={{ __html: t('underLobby', { interpolation: { escapeValue: false } }) }}></a>
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Story;