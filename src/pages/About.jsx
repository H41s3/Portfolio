import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="h1 mb-6">About Me</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="h2 mb-4">Background</h2>
          <p className="mb-4">
            I am a passionate software engineer based in Melbourne, Australia. With a strong foundation in multiple programming languages
            and a keen interest in building innovative solutions, I strive to create impactful applications that solve real-world problems.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="h2 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="h3 mb-2">Programming Languages</h3>
              <ul className="list-disc list-inside">
                <li>Python</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Swift</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="h3 mb-2">Technologies</h3>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>SQL</li>
                <li>iOS Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="h2 mb-4">Education</h2>
          <p className="mb-2">Bachelor of Information Technology</p>
          <p className="mb-4">Swinburne University of Technology</p>
        </div>
      </div>
    </div>
  );
};

export default About;