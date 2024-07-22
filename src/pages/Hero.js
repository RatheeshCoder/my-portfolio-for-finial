import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';
import Me from '../assets/me.png'

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hi I AM RATHEESH R</h2>
        <h3 className="tagline">Transforming Idea into digital realities</h3>
        <p className="paragraph">Hey there, I'm Ratheesh, a B.Tech student specializing in Artificial Intelligence & Data Science. By day, I'm diving into the world of data, but my creative side shines as a self-employed web designer and front-end developer. I blend technical expertise with design finesse to craft captivating websites and portfolios that exude professionalism. Let's collaborate and bring your digital ideas to life!</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1MPfGEDZ2J2ZHxJh6EQvEGFaC9btpjZwR/view?usp=sharing" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Me} alt="RATHEESH R" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/RatheeshCoder" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/ratheeshcoder/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100035923960609" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/single_rider_r/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
  </div>
);

export default Hero;
