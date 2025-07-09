// src/components/Footer.jsx

import React from "react";
import { socials } from "../data"; //Impor data sosial media

function Footer() {
  return (
    <footer className="main-footer">
      <ul className="social-list" id="social-list">
        {/* .map() untuk render setiap ikon sosial media */}
        {socials.map((social, index) => (
          <li key={index}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              // Render SVG dari string menggunakan dangerouslySetInnerHTML
              dangerouslySetInnerHTML={{ __html: social.icon }}
            >
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-copy">
        &copy; 2025 Hanif Ardiyanta Nugraha. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;