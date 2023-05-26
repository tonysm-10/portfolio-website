import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import portfolioPng from '../../assets/images/portfolio1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faMailForward, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="sub-logo" src={portfolioPng} alt="logotext" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/react-portfolio">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/'>
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