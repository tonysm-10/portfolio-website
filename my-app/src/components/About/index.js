import Cube from './Cube';
import './index.scss';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div className="aboutPage flex">
        <div>

            <div className="section">
                <h1>About Me</h1>
            </div>

            <div className="aboutSection">
                <p>
                    Passionate full-stack developer with a constant thirst for knowledge and a drive to excel. I thrive on tackling new challenges and exploring emerging technologies in the ever-evolving world of web development. Ambitious by nature, I am continuously seeking opportunities to expand my skill set and stay ahead of the curve.
                </p>
                <p>
                    With a strong belief in the power of collaboration, I enjoy working in dynamic teams where I can contribute my skills and learn from others. I have had the privilege of working on exciting Projects.
                </p>
                <p>
                    If you share the same passion for innovative web solutions, I invite you to explore my portfolio and connect with me on LinkedIn. Let's collaborate!
                </p>
                
                <Link to='/resume' className='flat-button'>View Resume!</Link>
                <Link to='/projects' className='flat-button'>View Projects!</Link>
            </div>
        </div>
        <Cube />
        
        

    </div>
  );
};

export default About;
