import Header from "../components/Header";
import portraitAbout from '../assets/portraitAbout.webp';
import afterEffects from '../assets/after-effects.svg';
import css from '../assets/css-3.svg';
import figma from '../assets/figma.svg';
import html from '../assets/html.svg';
import illustrator from '../assets/illustrator.svg';
import javascript from '../assets/logo-javascript.svg';
import photoshop from '../assets/photoshop.svg';
import react from '../assets/react.svg';
import pencil from '../assets/pencil.svg';
import codeIcon from '../assets/codeIcon.svg';
import blob3 from '../assets/blob3.svg';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WordChange from "../components/WordChange";


export default function AboutPage() {

    return (
        <>
            <Header />
            <main className="about-content">
                <h1>Er jeg jeres nye kollega?</h1>
                <section className="intro-section">
                    <div className="about-img-cont">
                        <img src={blob3} alt="Blob" />
                        <img src={portraitAbout} alt="Billede af Tobias Wolmar" />
                        <hr />
                    </div>
                    <div className="intro-text-cont">
                        <div>
                            <h2>Frontend Developer</h2>
                            <WordChange />
                        </div>
                        <p>Jeg hedder Tobias og er en passioneret frontend developer på multimediedesignuddannelsen. Som person er jeg åben og med bringer altid et godt humør. Jeg er fleksibel i mit arbejde og er god til selv at tage initiativ og jonglere flere ting i luften på én gang. Samtidig sætter jeg også pris på et godt sammenhold i et team, altså som en 'holdspiller med initiativ'. Sansen for detaljer viser sig tydeligt i mine projekter, i alt fra kodeopsætning til designet af en webside. Så hvis I er på udkig efter en dedikeret medarbejder, som altid er åben over for nye udfordringer, så tøv ikke med at <Link to="/kontakt">kontakte mig.</Link></p>
                    </div>
                </section>
                <section className="skills-section">
                    <h3>Færdigheder</h3>
                    <hr />
                    <div className="skills-section-icon"><img src={codeIcon} alt="" /></div>
                    <div className="skills-wrap">
                        <img src={html} alt="html logo" />
                        <img src={css} alt="css logo" />
                        <img src={javascript} alt="JavaScript logo" />
                        <img src={react} alt="React logo" />
                    </div>
                    <div className="skills-text-cont">
                        <p>Jeg elsker at opsætte og kode hjemmesider helt fra bunden. Lige fra at skabe HTML-strukturen og definere CSS-stylingen, til at implementere den bagvedliggende funktionalitet med JavaScript - det ligger naturligt for mig. Gennem min uddannelse og mine forskellige projekter har jeg opnået betydelig erfaring på dette område, og jeg brænder for fortsat at forfine mine færdigheder. Udover dette har jeg også erfaring med React-frameworket, som jeg blandt andet har benyttet til at udvikle dette portfolio.</p>
                    </div>
                    <div className="skills-section-icon"><img src={pencil} alt="blyant ikon" /></div>
                    <div className="skills-wrap">
                        <img src={afterEffects} alt="After effects logo" />
                        <img src={illustrator} alt="Adobe Illustrator logo" />
                        <img src={photoshop} alt="Photoshop logo" />
                        <img src={figma} alt="Figma logo" />
                    </div>
                    <div className="skills-text-cont">
                        <p>Udover mine erfaringer med frontend-udvikling er jeg en erfaren bruger af flere af Adobes kreative programmer. Blandt mine mest flittigt benyttede værktøjer finder du After Effects, Illustrator, Photoshop og Figma. Disse programmer spiller en afgørende rolle i min kreative proces, da jeg bruger dem til at forme designs og give dem liv gennem grafisk design og animation. Mine færdigheder inden for disse værktøjer gør mig i stand til at kombinere min tekniske ekspertise med et kreativt touch.</p>
                    </div>
                </section>
                <section className="outro-section">
                    <h3>Er det mig i leder efter?</h3>
                    <Link to="/kontakt" className="read-more-btn">Kontakt mig</Link>
                    <p>Jeg ser frem til at høre fra jer</p>
                </section>
            </main>
            <BackToTop />
            <Footer />
        </>
    )
}