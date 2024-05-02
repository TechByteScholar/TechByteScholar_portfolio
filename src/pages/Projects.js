import React from 'react';
import { NavLink } from 'react-router-dom';
import './Projects.css';
import {
  MdWeb,
  MdPhoneAndroid,
  MdMemory,
  MdSearch,
  MdCreate,
  MdSchool,
  MdWork,
  MdBrush,
  MdDesignServices,
  MdOutlinePublic,
  MdPeopleOutline
} from 'react-icons/md';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Our Services</h1>
      <p>Explore our projects spanning across various domains of technology and research.</p>
      
      <div className="projects-grid">
        <div className="project-category web">
          <h1>Website Development</h1>
          <MdWeb className="icon" />
          <p>Projects featuring front-end and back-end development, as well as full-stack applications.</p>
          <a href="https://drive.google.com/drive/folders/1R_Ys6uhUACYZ130dhlOWexxS7q5TM3hX?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category android">
          <h1>Android Development</h1>
          <MdPhoneAndroid className="icon" />
          <p>Native Android applications built with Java/Kotlin and modern Android development practices.</p>
          <NavLink to="/projects/android" className="btn">Explore</NavLink>
        </div>

        <div className="project-category ml">
          <h1>Machine Learning (Python)</h1>
          <MdMemory className="icon" />
          <p>Data-driven applications and analysis using Python, TensorFlow, and other ML frameworks.</p>
          <a href="https://drive.google.com/drive/folders/1wfxeefjm-Kw4HgEA-xiRap2jmSpx-oV7?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category research">
          <h1>Research Papers
            Writing
          </h1>
          <MdSearch className="icon" />
          <p>In-depth research projects that delve into cutting-edge technological advancements.</p>
          <a href="https://drive.google.com/drive/folders/1iS5JuzwGDACNeDUbGdXLpSmVyyORGzTY?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category writing">
          <h1>Academic Writing</h1>
          <MdCreate className="icon" />
          <p>High-quality writing services for academic papers, essays, and reports tailored to educational standards.</p>
          <a href="https://drive.google.com/drive/folders/1_SeqeujJACcISzwjKr05Br-bkbKoDmft?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category writing">
          <h1>Technical Writing</h1>
          <MdWork className="icon" />
          <p>Professional writing services focused on creating technical documents, manuals, and how-to guides.</p>
          <a href="https://drive.google.com/drive/folders/1clw0X28HpYvJLS55JxmwqzjwxhgKcHJk?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category writing">
          <h1>Proposal Writing</h1>
          <MdSchool className="icon" />
          <p>Expert assistance in writing compelling proposals for grants, projects, and research activities.</p>
          <a href="https://drive.google.com/drive/folders/18dvct5CCmR-IfmrZZENuzX1VOpZBjq-H?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category writing">
          <h1>Thesis Writing</h1>
          <MdSchool className="icon" />
          <p>Comprehensive support for crafting thesis and dissertations with meticulous research and scholarly insight.</p>
          <a href="https://drive.google.com/drive/folders/1cg3lk8W8V3g2U-XxqNtYB2Oi4j5ebj36?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category cv">
          <h1>CV Designing</h1>
          <MdDesignServices className="icon" />
          <p>Professional and impactful CVs designed to make a lasting first impression.</p>
          <a href="https://drive.google.com/drive/folders/172LFVqr0qIXAVYKhWrb4oq67T1A5AvKJ?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category cv">
          <h1>Poster Designing</h1>
          <MdBrush className="icon" />
          <p>Professional and impactful posters designed to make a lasting first impression.</p>
          <a href="https://drive.google.com/drive/folders/1r0fRQmsdr_gv3wdBO0Bt_hknNubQo_3m?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category freelance">
          <h1>Freelance</h1>
          <MdOutlinePublic className="icon" />
          <p>Versatile projects completed for clients around the globe, tailored to specific business needs.</p>
          <a href="https://drive.google.com/drive/folders/1MW5LlUTX8ekKnL6ymgZjEhAS1ywOcBtY?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Explore</a>
        </div>

        <div className="project-category cv">
          <h1>Consultation</h1>
          <MdPeopleOutline className="icon" />
          <p>Meeting with clients to discuss Academic misconduct and provide expert advice.</p>
          <a href="https://zoom.us/join" className="btn" target="_blank" rel="noopener noreferrer">Meeting</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
