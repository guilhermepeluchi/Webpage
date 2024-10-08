import React from 'react';
import underConstructionImg from '../images/under-construction.png';


function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="under-construction">
        <img src={underConstructionImg} alt="Under Construction" />
      </div>
    </section>
  );
}

export default Projects;
