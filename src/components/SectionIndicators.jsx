import React from 'react';

export default function SectionIndicators({ currentSection, scrollToSection }) {
    return (
        <div className="section-indicators">
            <div key="Home" className={`section-indicator ${currentSection === 0 ? 'active' : ''}`} onClick={() => scrollToSection(0)}></div>
            <div key="projects" className={`section-indicator ${currentSection === 1 ? 'active' : ''}`} onClick={() => scrollToSection(1)}></div>
            <div key="AboutMe" className={`section-indicator ${currentSection === 2 ? 'active' : ''}`} onClick={() => scrollToSection(2)}></div>
            <div key="Contact" className={`section-indicator ${currentSection === 3 ? 'active' : ''}`} onClick={() => scrollToSection(3)}></div>
        </div>
    )
}