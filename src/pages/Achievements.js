import React from 'react';
import './Achievements.css'; // Make sure you create an Achievements.css for styling

const Achievements = () => {
  return (
    <div className="achievements">
      <section className="hero-section">
        <h1>My Achievements</h1>
        <p>Celebrating milestones and recognitions on my professional journey.</p>
      </section>

      <section className="awards">
        <h2>Awards</h2>
        <div className="achievement-list">
          {/* Repeat this block for each award */}
          <div className="achievement-item">
            <span className="year">2023</span>
            <h3>Top Innovator Award</h3>
            <p>Received for outstanding innovation in software development at the Global Tech Summit.</p>
          </div>
          {/* ... other awards */}
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <div className="achievement-list">
          {/* Repeat this block for each certification */}
          <div className="achievement-item">
            <span className="year">2022</span>
            <h3>Certified Cloud Practitioner</h3>
            <p>Achieved AWS Certified Cloud Practitioner recognition for demonstrating cloud expertise.</p>
          </div>
          {/* ... other certifications */}
        </div>
      </section>

      <section className="publications">
        <h2>Publications</h2>
        <div className="achievement-list">
          {/* Repeat this block for each publication */}
          <div className="achievement-item">
            <span className="year">2021</span>
            <h3>Journal of AI Research</h3>
            <p>Published a paper on "Advances in AI and Machine Learning Algorithms" in a peer-reviewed journal.</p>
          </div>
          {/* ... other publications */}
        </div>
      </section>

      <section className="talks">
        <h2>Speaking Engagements</h2>
        <div className="achievement-list">
          {/* Repeat this block for each talk */}
          <div className="achievement-item">
            <span className="year">2020</span>
            <h3>Keynote Speaker</h3>
            <p>Delivered a keynote on "The Future of Web Technologies" at the Annual Developers Conference.</p>
          </div>
          {/* ... other talks */}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
