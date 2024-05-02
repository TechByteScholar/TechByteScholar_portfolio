//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Projects from './Projects'; // Ensure Projects is properly exported from Projects.js
import About from './About'; // Import the About component
import { FaArrowRight } from 'react-icons/fa'; // Importing FontAwesome arrow icon for buttons

const Home = () => {
  const navigate = useNavigate();

  const goToProjectsPage = () => {
    // Adding a pre-navigation animation or logic can be placed here
    navigate('/projects');
  };

  return (
    <div className="home">
      <HeroSection onExploreProjects={goToProjectsPage} />
      <IntroSection />
      <ProjectsSection />
      <About /> {/* Enhancing visual order by moving About to a strategic position */}
    </div>
  );
};

const HeroSection = ({ onExploreProjects }) => (
  <section className="hero">
    <h1>Welcome to TechByte Scholar Ltd</h1>
    <p>Exploring the future of technology through pioneering projects and insightful collaborations.</p>
    <button onClick={onExploreProjects} className="btn btn-primary">
      Explore Our Projects <FaArrowRight />
    </button>
  </section>
);

const IntroSection = () => (
  <section className="intro">
    <h1>Who We Are?</h1>
    <p>TechByte Scholar Ltd. specializes in innovative technology solutions across web and mobile development, machine learning, and AI. Our team is driven to transform complex challenges into actionable digital tools, enabling our clients to lead in their industries. Committed to sustainability and cutting-edge research, we are shaping the future of technology with every project we undertake.</p>
    <p>Join us in pioneering a smarter, sustainable future.</p>
  </section>
);


const ProjectsSection = () => (
  <section className="home-projects">
    <Projects />
  </section>
);


export default Home;
