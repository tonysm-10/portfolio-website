import { Link } from 'react-router-dom'
import letter from '../../assets/images/letter.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br></br>
                <nobr>I'm <img alt='' src={letter} />nthony</nobr>
                <span className='webdev'>Web Developer</span>
                </h1>
                <div className='box'>
                    <h2>Frontend Developer/ Fullstack Developer</h2>
                    <Link to='portfolio-website/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <div className="technologies">
                    <div>
                        <h2 className='techno'>TECHNOLOGIES</h2>
                    </div>
                    <div>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>NodeJs</li>
                            <li>React</li>
                            <li>Graphql</li>
                            <li>MongoDB</li>
                            <li>MySql</li>
                            <li>Handlebars</li>
                            <li>ExpressJs</li>
                            <li>GIT</li>
                            <li>...</li>
                    </div>
                </div>
            </div>
            <Logo />
        </div>
    )
}

export default Home
