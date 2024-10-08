import React from 'react';
import minhaFoto from '../images/photo-blur.png';
import cv from '../documents/Guilherme Peluchi - Resume.pdf';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About</h2>
      <div className="about-content">
        <img src={minhaFoto} alt="Guilherme Peluchi" className="about-image" />
        <div>
          <p>
            I am a final-year student in the Programming field at LaSalle College, seeking an internship to apply my academic knowledge and practical skills. 
            I am a rapid and enthusiastic learner, driven by challenges and proactive in my approach. In my recent roles, I focused on building reports and conducting analyses to support decision-making, process redesign, and productivity control. 
            I have developed automation solutions using Excel VBA, Databricks, and Power BI, significantly reducing task execution time.
          </p>
          <p>
            With over five years of experience in customer service, I have specialized in resolving technical issues and possess deep business knowledge. 
            I am highly skilled in Excel, PowerPoint, and Word, capable of creating effective presentations, reports, and documents. 
          </p>
          <p>
            I look forward to leveraging my skills and experience in a dynamic internship role.
          </p>
          <a href={cv} download="GuilhermePeluchi-CV.pdf">
            <button className="download-cv-button">Click here to download my CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
