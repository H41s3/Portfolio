import React from 'react';
import { IoLogoMicrosoft, IoLogoIonic, IoRocketOutline } from 'react-icons/io5';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Aside = () => {
  return (
    <div className="aside">
      <div className="topics">
        <h2 className="h2">Centered</h2>
        <a href="#" className="topic-btn">
          <div className="icon-box">
            <IoLogoMicrosoft />
          </div>
          <p>Software Development</p>
        </a>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <IoLogoIonic />
          </div>
          <p>C++, Python, SQL, Swift, and JavaScript</p>
        </a>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <IoRocketOutline />
          </div>
          <p>Software Engineering</p>
        </a>
      </div>

      <div className="tags">
        <h2 className="h2">Tags</h2>
        <div className="wrapper">
          {['python', 'c++', 'javascript', 'html and css', 'swift', 'frontend', 'software dev', 'ios dev']
            .map(tag => (
              <button key={tag} className="hashtag">#{tag}</button>
            ))}
        </div>
      </div>

      <div className="contact">
        <h2 className="h2">Get in touch</h2>
        <div className="wrapper">
          <p>Send me a message. I'm all ears!</p>
          <ul className="social-link">
            <li>
              <a href="https://www.instagram.com/_____iejc/" className="icon-box discord">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emilio-joseph-calma-ba21a129a/" className="icon-box twitter">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/HaiseSsky" className="icon-box facebook">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <h2 className="h2">Newsletter</h2>
        <div className="wrapper">
          <p>To be among the first to know about the newest developments, sign up for my newsletter.</p>
          <form action="#">
            <input type="email" name="email" placeholder="Email Address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Aside;