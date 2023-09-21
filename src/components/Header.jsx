import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [headerColor, setHeaderColor] = useState("#FFFCF5");
  const [barColor, setBarColor] = useState("#FFFCF5");
  const [headerBGColor, setHeaderBGColor] = useState("#121F30");


  const currentPage = location.pathname;

  useEffect(() => {
    if (currentPage === "/kontakt" || currentPage === "/projekter" || currentPage === "/om-mig") {
      setHeaderColor("#121F30");
      setBarColor("#121F30");
      setHeaderBGColor("#FFFCF5");
    }
  }, [currentPage]);

  const determineActiveSection = () => {
    const sections = document.querySelectorAll("section");
    const viewportHeight = window.innerHeight;
    const visibilityThreshold = viewportHeight / 1.15;
    const scrollTop = window.scrollY;

    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      const isSectionVisible =
        sectionTop >= scrollTop - visibilityThreshold &&
        scrollTop + viewportHeight <= sectionBottom + visibilityThreshold;

      if (isSectionVisible) {
        return index;
      }
    }

    return -1;
  };

  useEffect(() => {
    if (currentPage === "/") {
      const handleScroll = () => {
        const activeSectionIndex = determineActiveSection();

        if (activeSectionIndex >= -1) {
          if (activeSectionIndex === 0) {
            setHeaderColor("#FFFCF5");
            setBarColor("#FFFCF5");
            setHeaderBGColor("#121F30");
          } else if (activeSectionIndex === 1) {
            setHeaderColor("#121F30");
            setBarColor("#121F30");
            setHeaderBGColor("#FFFCF5");
          } else if (activeSectionIndex === 2) {
            setHeaderColor("#FFFCF5");
            setBarColor("#FFFCF5");
            setHeaderBGColor("#121F30");
          } else if (activeSectionIndex === 3) {
            setHeaderColor("#121F30");
            setBarColor("#121F30");
            setHeaderBGColor("#FFFCF5");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentPage]);

  useEffect(() => {

    const navLinks = document.querySelectorAll(".nav-link");
    if (currentPage === "/") {
      navLinks[0].style.textDecoration = "underline";
      navLinks[0].style.textDecorationColor = "#FFB875";
    } else if (currentPage === "/projekter") {
      navLinks[1].style.textDecoration = "underline";
      navLinks[1].style.textDecorationColor = "#FFB875";
    } else if (currentPage === "/om-mig") {
      navLinks[2].style.textDecoration = "underline";
      navLinks[2].style.textDecorationColor = "#FFB875";
    } else if (currentPage === "/kontakt") {
      navLinks[3].style.textDecoration = "underline";
      navLinks[3].style.textDecorationColor = "#FFB875";
    }

  }, [currentPage])

  const activeHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    const bars = document.querySelectorAll(".bar");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.forEach((link) => {
      link.classList.toggle("active");
    });
    bars.forEach((bar) => {
      bar.classList.toggle("active");
    });
  };

  const closeMenuOnClickOutside = (event) => {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
  
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  };
  
  document.body.addEventListener("click", closeMenuOnClickOutside);


  return (
    <header style={{ color: headerColor, backgroundColor: headerBGColor }}>
      <div className="logo-cont">
        <Link to="/" className="nav-logo" style={{ color: headerColor }}>TW</Link>
      </div>
      <nav className="navigation">
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-link" style={{ color: headerColor }}>Forside</Link></li>
          <li className="nav-item"><Link to="/projekter" className="nav-link" style={{ color: headerColor }}>Projekter</Link></li>
          <li className="nav-item"><Link to="/om-mig" className="nav-link" style={{ color: headerColor }}>Om mig</Link></li>
          <li className="nav-item"><Link to="/kontakt" className="nav-link" style={{ color: headerColor }}>Kontakt</Link></li>
        </ul>
        <div className="hamburger" onClick={activeHamburger}>
          <span className="bar" style={{ backgroundColor: barColor }}></span>
          <span className="bar" style={{ backgroundColor: barColor }}></span>
          <span className="bar" style={{ backgroundColor: barColor }}></span>
        </div>
      </nav>
    </header>
  )
};

export default Header;