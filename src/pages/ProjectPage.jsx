import Header from "../components/Header";
import '../index.css';
import macmockup from '../assets/macmockup.webp';
import macGlassFill from '../assets/macglassfill.webp';
import macWebdoc from '../assets/macwebdoc.webp';
import macSquash from '../assets/macsquash.webp';
import nimoskin from '../videos/nimoskin.mp4';
import Footer from "../components/Footer";
import nipponVid from '../videos/nippon.mp4';
import vinhandelVid from '../videos/vinhandel.mp4';
import glassFillVid from '../videos/glassfill.mp4';
import BackToTop from "../components/BackToTop";
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import ProjectsText from "../components/ProjectsText";
import { Link } from "react-router-dom";
import thumbnailGlass from '../assets/thumbnail-glassfill.webp';
import thumbnailNimo from '../assets/thumbnail-nimo.webp';
import thumbnailVin from '../assets/thumbnail-vin.webp';
import thumbnailNippon from '../assets/thumbnail-nippon.webp';



export default function ProjectPage() {

  const scrollToPosition = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Adjust the offset as needed
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth', });
    }
  }

  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    async function getPostTitle() {
      const url = "https://wp.tobiaswolmar.dk/wp-json/wp/v2/posts?_embed&categories=8";
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        setPageTitle(data[0].title.rendered);
      }
    }

    getPostTitle();
  }, []);


  const [posts, setposts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const url = "https://wp.tobiaswolmar.dk/wp-json/wp/v2/posts?_embed&categories=9"
      const response = await fetch(url);
      const data = await response.json();
      setposts(data);
    }
    getPosts();
  }, []);


  return (
    <>
      <Header />
      <main className="project-content">
        <h1>{parse(pageTitle)}</h1>
        <section className="shown-projects">
          <div className="selection-heading">
            <h2 id="hjemmesider">Hjemmesider</h2>
            <hr />
          </div>
          <section className="projects-selection">
            <p onClick={() => scrollToPosition("hjemmesider")} >Hjemmesider</p>
            <p onClick={() => scrollToPosition("motion-graphics")} >Motion Graphics</p>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                {posts.map(post => (
                  <ProjectsText key={post.id} post={post} />
                ))}
              </div>
              <div className="project-img">
                <img src={macmockup} alt="Mockup af et projekt på en macbook" />
              </div>
            </div>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>tubrog squash</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>Dette er et indivuduelt projekt i forbindelse med eksamen ppå 1. semester som multimediedesigner. Her har jeg arbejdet med en fiktiv case om et rebrand af Tuborg Squash's visuelle identitet, samt en tilhørende hjemmeside.</p>
                  <p>Programmer brugt: <span>HTML</span> - <span>CSS</span> - <span>JS</span> - <span>Illustrator</span> - <span>Photoshop</span> - <span>Adobe Dimensions</span></p>
                  <a className="read-more-btn" href="https://squash.tobiaswolmar.dk/" target="_blank">Se projekt</a>
                  <a className="read-more-btn" href="https://github.com/TobiasRW/1.-Semester-Eksamen---Tuborg-Squash" target="_blank">Se koden</a>
                </div>
              </div>
              <div className="project-img">
                <img src={macSquash} alt="Mockup af et projekt på en macbook" />
              </div>
            </div>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>Webdoc om ai</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>I dette stod opgaven på at skabe en webdoc omkring et emne eller person vi som grupe fandt interessant. Vi har ud fra dette skabt en interaktiv webdoc omkring Kunstig Intelligens. Webdoccen er ment til visning på computerskærme.</p>
                  <p>Programmer brugt: <span>HTML</span> - <span>CSS</span> - <span>JS</span> - <span>After Effects</span> - <span>Figma</span> - <span>Illustrator</span> - <span>Photoshop</span> - <span>Premiere Pro</span></p>
                  <a className="read-more-btn" href="https://webdoc-ai.harmscreativity.dk/" target="_blank">Se projekt</a>
                  <a className="read-more-btn" href="https://github.com/Nico-Harms/Webdoc" target="_blank">Se koden</a>
                </div>
              </div>
              <div className="project-img">
                <img src={macWebdoc} alt="Mockup af et projekt på en macbook" />
              </div>
            </div>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>interaktiv glas animation</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>Dette er fritidsprojekt hvor målet var at skabe en interaktiv webside, med scrolleffekter. I dette tilfælde bliver glasset gradvist fyldt når brugeren scroller ned. Projektet er baseret på en animation jeg har lavet i After Effects, hvor de grafiske elementer er skabt i Illustrator. Tilsvarende animation ses nedenfor i oversigten over Motion Graphics.</p>
                  <p>Programmer brugt: <span>HTML</span> - <span>CSS</span> - <span>JS</span> - <span>After Effects</span> - <span>Illustrator</span></p>
                  <a className="read-more-btn" href="https://glassfill.tobiaswolmar.dk/" target="_blank">Se projekt</a>
                  <a className="read-more-btn" href="https://github.com/TobiasRW/glass-fill" target="_blank">Se koden</a>
                </div>
              </div>
              <div className="project-img">
                <img src={macGlassFill} alt="Mockup af et projekt på en macbook" />
              </div>
            </div>
          </section>
        </section>
        <section className="motion-graphics">
          <div className="selection-heading">
            <h2 id="motion-graphics" >Motion Graphics</h2>
            <hr />
          </div>
          <section className="projects-selection ps2">
            <p onClick={() => scrollToPosition("hjemmesider")}>Hjemmesider</p>
            <p onClick={() => scrollToSection("motion-graphics")}>Motion Graphics</p>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>Reklame for nimoskin</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>I videoen ved siden af ses en reklame jeg har lavet i samarbejde med <a className="nimo" href="https://nimoskin.dk/" target="_blank">Nimoskin.dk</a>for at promovere et af deres produkter. Nimoskin havde et ønske om at reklamere på Instagram og TikTok, så videoen er lavet i et 9:16 format. Reklamen er redigeret og animeret i <span>After Effetcs</span>.
                  </p>
                </div>
              </div>
              <div className="project-vid">
                <video poster={thumbnailNimo} controls src={nimoskin}></video>
              </div>
            </div>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>Motion Graphic - Nippon</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>Denne animation er lavet i forbindelse med et fiktivt projekt på 2. semester som multimediedesigner. Videoen er en reklame for et fiktivt måltidskassefirma ved navn 'Nippon'. Videon er skabt i <span>After Efefcts</span>, og de visuelle elementer er designet i <span>Illustrator</span>.</p>
                </div>
              </div>
              <div className="project-vid">
                <video poster={thumbnailNippon} controls src={nipponVid}></video>
              </div>
            </div>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>Motion Graphic - Aarhus Vinhandel</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>I forbindelse med eksamensprojektet på 2. semester som multimediedesigner har jeg kreeret en motion graphic som fremtiller en vinguide på Aarhus Vinhandels hjemmeside. Vinguiden er animeret i <span>After Efefcts</span>, og de visuelle elementer er designet i <span>Illustrator</span>.</p>
                </div>
              </div>
              <div className="project-vid">
                <video poster={thumbnailVin} controls src={vinhandelVid}></video>
              </div>
            </div>
          </section>
          <section className="shown-project">
            <div className="project-wrap">
              <div>
                <div className="project-heading">
                  <h3>Fyldt glas animation</h3>
                  <hr />
                </div>
                <div className="project-text">
                  <p>Som en del af et fritidsprojekt har jeg skabt denne animation med henblik på at genskabe på et interaktivt website. De visuelle elementer er designet i <span>Illustrator</span> som efterfølgende er animeret i <span>After Effects</span>. Tilsvarende webiste ses ovenfor i oversigten over hjemmesider.</p>
                </div>
              </div>
              <div className="project-vid">
                <video poster={thumbnailGlass} controls src={glassFillVid}></video>
              </div>
            </div>
          </section>
        </section>
        <section className="outro-section outro-projects">
          <h3>Har jeg fanget jeres interesse?</h3>
          <Link to="/kontakt" className="read-more-btn">Kontakt mig</Link>
        </section>
      </main>
      <BackToTop />
      <Footer />
    </>
  )
}