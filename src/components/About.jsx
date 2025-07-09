// src/components/About.jsx

import React from "react";

function About() {
  return (
    <>
    <h2 className="section-title">About</h2>
      <p>
        An Electronics and Instrumentation student with dual expertise in hardware and software engineering. I translate user needs into tangible solutions through Web Development and the Internet of Things (IoT). My main focus is to create seamlessly integrated systems with user experience as the highest priority. Ready to apply my fast-learning abilities in a dynamic and innovative environment.
      </p>
      <div className="button-container">
        {/* Path menunjuk ke folder public */}
        <a href="/assets/docs/Hanif Ardiyanta Nugraha-CV.pdf" download className="btn">
          Download CV
        </a>
      </div>
      </>
  );
}

export default About;