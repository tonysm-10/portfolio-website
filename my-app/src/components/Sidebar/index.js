import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import portfolioPng from '../../assets/images/portfolio1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faMailForward, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="sub-logo" src={portfolioPng} alt="logotext" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink className="about-link" exact='true' activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink className="about-link" exact='true' activeclassname="active" to="/projects">
                <FontAwesomeIcon icon={faProjectDiagram} />
            </NavLink>
            <NavLink className='contact-link' exact='true' activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/anthony-ayala-arellano-ba3b88279/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/tonysm-10'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='google.com'>
                    <FontAwesomeIcon icon={faMailForward} />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar