import React from 'react';
import './footer.css';
import githubIcon from '../../assets/icons/githubIcon.svg';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li className="links__li">
          <a
            className="links__a"
            href="https://github.com/Falxns/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links__img" src={githubIcon} alt="GitHub" />
          </a>
        </li>
        <li className="links__li">
          <a
            className="links__a"
            href="mailto:Maksim.Gladki@itechart-group.com"
          >
            Email us
          </a>
        </li>
        <li className="links__li">
          <a className="links__a" href="tel:+375295656229">
            +375(29)565-62-29
          </a>
        </li>
      </ul>
      <p className="footer__copyright">©2021</p>
    </footer>
  );
}

export default Footer;
