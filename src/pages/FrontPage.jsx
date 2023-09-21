import React, { useState, useEffect } from 'react';
import '../index.css';
import portrait from '../assets/portrait3.webp';
import portrait2 from '../assets/portrait2.webp';
import iphonemockup from '../assets/iphonemockup.webp';
import macmockup from '../assets/macmockup.webp';
import blob from '../assets/blob.svg';
import blob2 from '../assets/blob2.svg';
import afterEffects from '../assets/after-effects.svg';
import css from '../assets/css-3.svg';
import figma from '../assets/figma.svg';
import html from '../assets/html.svg';
import illustrator from '../assets/illustrator.svg';
import javascript from '../assets/logo-javascript.svg';
import photoshop from '../assets/photoshop.svg';
import react from '../assets/react.svg';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import SectionIndicators from '../components/SectionIndicators';
import Footer from '../components/Footer';


export default function FrontPage() {
    const [currentSection, setCurrentSection] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const sections = document.querySelectorAll('section');
        const viewportHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            const isSectionVisible =
                scrollTop + viewportHeight / 2 >= sectionTop &&
                scrollTop + viewportHeight / 2 <= sectionBottom;

            if (isSectionVisible) {
                setCurrentSection(index);
            }
        })
    }


    const scrollToSection = (sectionIndex) => {
        const sections = document.querySelectorAll('section');
        if (sectionIndex >= 0 && sectionIndex < sections.length) {
            const section = sections[sectionIndex];
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        var headings = document.querySelectorAll('.hover-effect');
    
        function handleHeadingHover(event) {
            if (currentSection === 0) {
                var mouseX = event.clientX;
                var mouseY = event.clientY;
                var offsetX = (mouseX - window.innerWidth / 2) / 30;
                var offsetY = (mouseY - window.innerHeight / 2) / 30;
    
                headings.forEach(heading => {
                    heading.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
            }
        }
    
        document.addEventListener('mousemove', handleHeadingHover);
    
        return () => {
            document.removeEventListener('mousemove', handleHeadingHover);
        };
    }, [currentSection]);
    


    return (
        <>
            <Header currentSection={currentSection} />
            <main className="frontPageContent">
                <section id="section1" className={`section ${currentSection === 0 ? 'active' : ''}`}>
                    <div className="wrapper">
                        <img className='blob-blue' src={blob} alt="background animated blob" />
                        <div className="front-heading-cont">
                            <p className='hover-effect'>Tobias Wolmar</p>
                            <h1 className='frontHeading hover-effect'>Frontend Developer</h1>
                        </div>
                        <div className="portrait">
                            <img className='portraitIMG' src={portrait} alt="Billede af Tobias Wolmar" />
                        </div>
                    </div>
                </section>
                <section id="section2" className={`section ${currentSection === 1 ? 'active' : ''}`}>
                    <div className="wrapper">
                        <div className="project-text-cont">
                            <h2 className='projectHeading'>Mine Projekter</h2>
                            <p>Jeg hedder Tobias Rønne Wolmar, og jeg er en passioneret multimediedesign-studerende med en forkærlighed for frontend-udvikling og kreativitet. Gennem min uddannelse og fritid har jeg udarbejdet og været en del af flere projekter.</p>
                            <p> Mit portfolio består af en sammensmeltning af forskellige discipliner inden for multimediedesign, herunder kodning, grafisk design og videoproduktion. Jeg har kodet hjemmesider fra bunden ved hjælp af værktøjer som HTML, CSS og JavaScript. Min værktøjskasse inkluderer også Illustrator, After Effects, Photoshop og Figma.</p>
                            <Link to="/projekter" className='read-projects read-more-btn'>Se alle projekter</Link>
                        </div>
                        <div className="project-img-cont">
                            <img src={blob2} alt="background animated blob" />
                            <img className='iphone' src={iphonemockup} alt="Mockup af et projekt på en Iphone" />
                            <img className='macbook' src={macmockup} alt="Mockup af et projekt på en macbook" />
                        </div>
                    </div>
                </section>
                <section id="section3" className={`section ${currentSection === 2 ? 'active' : ''}`}>
                    <div className="wrapper">
                        <div className="about-text-cont">
                            <h2 className='aboutHeading'>Erfaringer</h2>
                            <p>Som multimediedesigner er jeg blevet forelsket i kodning, hvor jeg finder passion for at fordybe mig i koden. Gennem min uddannelse har jeg fået gode erfaringer med HTML, CSS, JavaScript og React, hvilket har hjulpet mig med at skabe nogle fantastiske projekter.</p>
                            <p>Samtidig har jeg dyrket min kreativitet ved hjælp af Adobe Creative Cloud-værktøjer, hvilket har givet mig mulighed for at skabe grafiske designs og videoer. Blandt mine hyppigst anvendte programmer er After Effects, Illustrator, Photoshop og Figma.</p>
                            <Link to="/om-mig" className='read-about read-more-btn'>Læs mere om mig</Link>
                        </div>
                        <div className="skills-cont">
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img className='skill-logo' src={html} alt="html logo" />
                                    <span className='hide'>HTML</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img className='skill-logo' src={css} alt="Css logo" />
                                    <span className='hide'>CSS</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img src={javascript} alt="JavaScript logo" />
                                    <span className='hide'>JavaScript</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img src={react} alt="React logo" />
                                    <span className='hide'>React</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img src={afterEffects} alt="After effects logo" />
                                    <span className='hide'>After Effects</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img src={illustrator} alt="Adobe Illustrator logo" />
                                    <span className='hide'>Illustrator</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img src={photoshop} alt="Photoshop logo" />
                                    <span className='hide'>Photoshop</span>
                                </div>
                            </div>
                            <div className="icon-cont">
                                <div className='skill-wrapper'>
                                    <img src={figma} alt="Figma logo" />
                                    <span className='hide'>Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section4" className={`section ${currentSection === 3 ? 'active' : ''}`}>
                    <div className="wrapper">
                        <h3 className='contactHeading' >Kontakt mig gerne</h3>
                        <div className="mail-text">
                            <p>Mail</p>
                            <a href='mailto:tobiasrw98@gmail.com'>tobiasrw98@gmail.com</a>
                        </div>
                        <div className="socials-cont">
                            <h4>LinkedIn</h4>
                            <div className="socials">
                                <a className='linkedin' href="https://www.linkedin.com/in/tobias-wolmar-87991224a/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="contact-img-cont">
                            <img src={portrait2} alt="Billede af Tobias Wolmar" className="contact-img" />
                        </div>
                        <Footer />
                    </div>
                </section>
            </main>
            <SectionIndicators currentSection={currentSection} scrollToSection={scrollToSection} />
        </>
    )
}