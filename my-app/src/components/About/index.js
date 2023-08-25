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
                    Passionate Web developer with a constant thirst for knowledge and a drive to excel. 
                    I thrive on tackling new challenges and exploring emerging technologies in the world of web development. 
                    Ambitious by nature, I am continuously seeking opportunities to expand my skill set and stay ahead.
                </p>
                <p>
                    With a strong belief in the power of collaboration, 
                    I enjoy working in dynamic teams where I can contribute my skills and learn from others. 
                    I have had the privilege of working on exciting Projects.
                </p>
                <p>
                    I invite you to explore my portfolio, <a rel="noreferrer" target='_blank' href='https://github.com/tonysm-10'>Github </a> 
                    and connect with me on <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/anthony-ayala-arellano-ba3b88279/'>LinkedIn</a>!
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
