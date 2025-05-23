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
  // Add other projects here
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
                    <time dateTime=""></time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime="PT3M">...</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn load-more">Load More</button>
    </div>
  );
};

export default Projects;