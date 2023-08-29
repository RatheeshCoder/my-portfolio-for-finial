import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        FREE
        {' '}
        <br />
        TO
        <br />
        {' '}
        CHAT ❤️
      </h1>
    </div>
    <div className="footer-right">
      <h3>FOREVER CAPTIVATED BY THE ENDLESS POSSIBILITIES OF
</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>AI/DS/ML</p>
        <p>WordPress Development</p>
        <p>Responsive Web App</p>
        <p>New Opportunities</p>
        <p>Interactive 3D Models</p>
        <p>Data Science Integration</p>
        <p>Visualizing Complex Data</p>
      </div>

      <hr />

      <h3>
      "Got a project on your mind? Let's shape it into reality."
        <span><a href="mailto:ratheeshraju2003@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/Ratheesh2003" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/ratheesh-r-web/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
        <span><a href="https://www.facebook.com/profile.php?id=100035923960609" target="_blank" rel="noreferrer">FACEBOOK</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
