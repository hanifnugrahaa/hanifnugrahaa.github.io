// src/components/SkillsList.jsx

import React from 'react';
import { skills } from '../data'; // Impor data skill

function SkillsList() {
  return (
    <>
    <h2 className="section-title">Technical Skills</h2>
      {/*.map() untuk membuat <li> untuk setiap skill */}
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillsList;