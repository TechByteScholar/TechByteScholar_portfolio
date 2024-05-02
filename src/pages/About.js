import React, { useState } from 'react';
import './About.css';
import boyImage from '../images/boy.png'; // Ensure the path to your images is correct

const teamMembers = [
  {
    name: "Simon",
    role: "SALES Manager",
    company: "TechByte Scholar Ltd.",
    experience: "Experienced sales manager skilled in driving revenue through strategic planning and client relationships.",
    education: "PhD in Economics from Kunsan National University, Korea, 2020",
    pastExperience: "Successfully led a high-performing sales team at EST Security (2021 - 2023)",
    bio: "Simon is a Passionate sales leader dedicated to delivering results through strategic vision and client-centric innovation.",
    image: boyImage,
    // Assuming other details such as social profiles might be here
  },
  {
    name: "Freya Santos",
    role: "Data Scientist",
    company: "TechByte Scholar Ltd.",
    experience: "Developing state-of-the-art data science solutions leveraging advanced techniques and frameworks.",
    education: "PhD in Data Science from London Metropolitan University, 2023",
    pastExperience: "Senior Data Scientist at Data Reply (2021 - 2022)",
    bio: "Freya is a Data Science maestro, with a keen eye for analytical prowess and data-driven insights.",
    image: boyImage,
    // Assuming other details such as social profiles might be here
  },
  {
    name: "Rayyan",
    role: "Web Developer",
    company: "TechByte Scholar Ltd.",
    experience: "Building robust full-stack applications with comprehensive features, leveraging React for the frontend and Node.js for the backend.",
    education: "PhD in Computer Science from Universiti Teknologi PETRONAS, Malaysia, 2024",
    pastExperience: "Junior Developer at Etctech Global (2020 - 2023)",
    bio: "Rayyan is a Front-end wizard, with a sharp eye for design and user experience.",
    image: boyImage,
    // Assuming other details such as social profiles might be here
  },
  {
    name: "Fritz",
    role: "Machine Learning Engineer",
    company: "TechByte Scholar Ltd.",
    experience: "Developing cutting-edge machine learning models using advanced algorithms and data analysis techniques.",
    education: "PhD in Machine Learning from Arden University, Germany 2023",
    pastExperience: "Junior ML Engineer at WebWorks (2019 - 2023)",
    bio: "Fritz is a Machine Learning Engineer, with a keen eye for data patterns and model optimization.",
    image: boyImage,
    // Assuming other details such as social profiles might be here
  },
  
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // This function toggles the selected member, showing/hiding the detail view
  const handleViewProfile = (member) => {
    if (selectedMember === member) {
      setSelectedMember(null); // If clicked again, it will hide the details
    } else {
      setSelectedMember(member); // Shows the details for the clicked member
    }
  };

  return (
    <div className="about-container">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-photo" />
            <h1>{member.name}</h1>
            <p>{member.role} at {member.company}</p>
            {selectedMember === member && (
              <div className="team-member-details">
                <p><strong>Experience:</strong> {member.experience}</p>
                <p><strong>Education:</strong> {member.education}</p>
                <p><strong>Past Experience:</strong> {member.pastExperience}</p>
                <p><strong>Bio:</strong> {member.bio}</p>
              </div>
            )}
            <button onClick={() => handleViewProfile(member)} className="btn view-profile-btn">
              {selectedMember === member ? 'Hide Profile' : 'View Profile'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
