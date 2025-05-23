import React from 'react';

const projects = [
  {
    id: 1,
    title: "PetPals: Your Companion in Finding Furry Friends",
    description: "Did this for my client. Built by HTML, CSS, and JavaScript.",
    image: "/images/a6.jpg",
    link: "https://h41s3.github.io/Pet-Pals/home.html",
    category: "Frontend Website"
  },
  {
    id: 2,
    title: "TypeMaster: Revolutionizing Typing Speed",
    description: "Web app that boosts your typing skills with precision and speed. Say hello to faster, more accurate typing.",
    image: "/images/speedtype.png",
    link: "https://h41s3.github.io/FastTyping/st.html",
    category: "Web Application"
  },
  {
    id: 3,
    title: "Responsive Login Form",
    description: "Responsive login form: HTML/CSS design that adjusts smoothly across devices.",
    image: "/images/jjk.png",
    link: "https://h41s3.github.io/Responsive-Login-Form/new.html",
    category: "Login Form"
  },
  {
    id: 4,
    title: "Sky Soarer",
    description: "Sky Soarer offers a nostalgic twist on Flappy Bird's gameplay. It aims to evoke fond memories while providing a fresh experience.",
    image: "/images/skysoarer.png",
    link: "https://h41s3.github.io/Sky-Soarer/",
    category: "Web Application"
  },
  {
    id: 5,
    title: "Cuisinefy",
    description: "Find your perfect recipe in seconds with Cuisinefy. Fast, easy, and delicious - start your cooking adventure now and make every meal a delight!",
    image: "/images/cuisinefy.png",
    link: "https://bit.ly/4ewUmA2",
    category: "Web Application"
  },
  {
    id: 6,
    title: "Pong Game",
    description: "Classic Pong game implementation in Python using Pygame library.",
    image: "/images/pong.png",
    link: "#",
    category: "Python"
  },
  {
    id: 7,
    title: "Monsters Shooter",
    description: "Developed a 2D arcade-style game using Python and Pygame where players control a cat that shoots laser to defeat enemy monsters.",
    image: "/images/catshooter.jpeg",
    link: "#",
    category: "Python"
  },
  {
    id: 8,
    title: "iOS Recipe App",
    description: "Developed a recipe app using Swift that integrates with an external API to fetch and display recipes based on user input.",
    image: "/images/swift.png",
    link: "#",
    category: "Swift"
  },
  {
    id: 9,
    title: "Speech-to-Text Converter",
    description: "This project implements a speech-to-text converter using Python and popular libraries such as SpeechRecognition.",
    image: "/images/speechtext.jpg",
    link: "#",
    category: "Python"
  },
  {
    id: 10,
    title: "Hand Tracker",
    description: "This Python project utilizes computer vision techniques to enable real-time hand tracking and count fingers.",
    image: "/images/handtracking.jpg",
    link: "#",
    category: "Python"
  }
];

const Projects = () => {
  return (
    <div className="blog">
      <h2 className="h2">My Projects</h2>
      <div className="blog-card-group">
        {projects.map(project => (
          <div key={project.id} className="blog-card">
            <div className="blog-card-banner">
              <img 
                src={project.image}
                alt={project.title} 
                width="250"
                className="blog-banner-img" 
              />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny">{project.category}</button>
              <h3>
                <a href={project.link} className="h3" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="blog-text">{project.description}</p>

              <div className="wrapper-flex">
                <div className="profile-wrapper">
                  <img src="/images/2.png" alt="Me" width="50" />
                </div>
                <div className="wrapper">
                  <a href="#" className="h4">Emilio Joseph Calma</a>
                  <p className="text-sm">
                    <time dateTime="2024">2024</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;