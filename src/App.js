import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Name-dev">
          <h1>Guilherme Peluchi</h1>
          <p><i>Full Stack Developer</i></p>
        </div>
        <Navbar />
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <footer id="contact">
        <h2>Contato</h2>
        <h1>Guilherme Peluchi</h1>
        <p>Interested? Get in touch by clicking the icons below!</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/guilherme-peluchi-75817aa5/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/guilhermepeluchi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:guip_peluchi@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
