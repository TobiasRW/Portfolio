import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import portraitContact from '../assets/portraitContact.webp';
import blob3 from '../assets/blob3.svg';

export default function ContactPage() {

    const footerStyle = {
        position: "absolute",
        bottom: 0,
      };

    return (
        <>
            <Header />
            <main className="contact-content">
                <h1>Jeg kan kontaktes på</h1>
                <div className="contact-wrap">
                    <div className="contactpage-img-cont">
                        <img src={blob3} alt="Blob" />
                        <img src={portraitContact} alt="Billede af Tobias Wolmar" />
                        <hr />
                    </div>
                    <div className="contact-text-cont">
                        <div>
                            <h2>Mail</h2>
                            <a href='mailto:tobiasrw98@gmail.com'>tobiasrw98@gmail.com</a>
                        </div>
                        <div>
                            <h3>Telefon</h3>
                            <p>30 30 51 54</p>
                        </div>
                        <div>
                            <h4>LinkedIn</h4>
                            <a className='linkedin' href="https://www.linkedin.com/in/tobias-wolmar-87991224a/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer footerStyle={footerStyle} />
        </>
    )
}