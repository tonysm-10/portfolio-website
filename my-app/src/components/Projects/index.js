import './index.scss';
import { useState } from 'react';
import ProjectCard from './ProjectCard/index';
import Modal from './Modal/index';
import image1 from './assets/NutritionHealth.png';
import image2 from './assets/fitnessTracker.png';
import image3 from './assets/creatifyApp.png'
import image4 from './assets/weather.png'
import image5 from './assets/ecommerce.png'
import image6 from './assets/music.png'
import image7 from './assets/yelpFinder.png'

const Projects = () => {
  const project2 = {
    link: 'https://fast-basin-24052.herokuapp.com/',
    image: image2,
    title: 'Fitness Tracker',
    github: 'https://github.com/Rbustan0/fitness-fiend',
    tech: 'HTML, CSS, JavaScript, Handlebars, MySql, Sequelize, Chart.js',
    description:
      'Fitness Fiend is a comprehensive fitness tracker web application that enables users to create an account, set goals, and monitor their fitness journey. The app allows users to track their workouts and meals, providing a visual representation of their progress using chart.js. With a focus on security and privacy, the app ensures secure login/logout functionality and protects user data throughout. Stay motivated and achieve your fitness goals with Fitness Fiend!',
  };
  const project1 = {
    link: 'https://harold-fv.github.io/project-setup/',
    image: image1,
    title: 'Nutrition Health Recommendation App!',
    github: 'https://github.com/harold-fv/project-setup',
    tech: 'HTML, CSS, JavaScript',
    description:
      'A user health info input form and fitness goal selector that calculate BMR and BMI. Two API functions to call Nutritionix and Edamam for nutritional data. A search box and food log to query the APIs for nutritional data. A modal to display recommendations based on BMR and BMI calculations.',
  };
  const project3 = {
    link: 'https://afternoon-refuge-07657.herokuapp.com',
    image: image3,
    title: 'Creatify App',
    github: 'https://github.com/tonysm-10/creatify-2.0',
    tech: 'MongoDB, Express, React, Nodejs, Graphql, JWT',
    description:
      'In the current digital landscape, establishing a robust online presence is crucial for small businesses. However, creating an online store from the ground up can be daunting, especially for those without extensive technical expertise. Moreover, existing eCommerce platforms often prove intricate and require significant time investment to master, discouraging small business owners. To address these challenges, we developed Creatify, a solution tailored explicitly to the needs of small business owners. Our aim was to fill the gap in the market by offering a simplified and user-friendly eCommerce platform. We recognized that these entrepreneurs wear multiple hats and managing an online store should be effortless, rather than an additional burden.',
  };
  const project4 = {
    link: 'https://main--golden-cobbler-bae7ad.netlify.app/',
    image: image4,
    title: 'Weather Dashboard',
    github: 'https://github.com/tonysm-10/weather-dashboard',
    tech: 'HTML, CSS, JavaScript, jQuery',
    description: 'This is a simple web application that allows users to search for the weather of a city and displays the current weather as well as a five-day forecast. It uses the OpenWeatherMap API to retrieve weather data.'
  }
  const project5 = {
    link: 'https://nimble-capybara-82d685.netlify.app/',
    image: image5,
    title: 'Gym Essentials',
    github: 'https://github.com/tonysm-10/ecommerce-frontend',
    tech: 'HTML, CSS, JavaScript, React',
    description: 'This Ecommerce frontend serves as your ultimate destination for sourcing all your gym essentials. Crafted meticulously using HTML, CSS, JavaScript, and React, this application empowers you to precisely determine the quantity of each item you desire. Seamlessly add items to your cart, and effortlessly manage your selections by removing them when needed!'
  }

  const project6 = {
    link: 'https://beautiful-lily-038088.netlify.app/',
    image: image6,
    title: 'Playlist Tracker',
    github: 'https://github.com/tonysm-10/jamming',
    tech: 'HTML, CSS, JavaScript, React',
    description: 'The Playlist Tracker App is a web application that allows users to search for songs using the Spotify API, create playlists, and save their favorite tracks to those playlists.'
  }
  const project7 = {
    link: 'https://main--cheery-custard-d309c9.netlify.app/',
    image: image7,
    title: 'Yelp Restaurant Finder',
    github: 'https://github.com/tonysm-10/ravenous',
    tech: 'HTML, CSS, JavaScript, React, Yelp Api',
    description: 'The Yelp Restaurant Finder is a web application that enables users to search for restaurants using the Yelp API. Users can input various criteria such as the type of restaurant, search keywords, and city to retrieve a curated list of restaurants that match their preferences!'
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <div className="contactPage">
      <div>
        <h1 className='my-projects'>My Projects</h1>
      </div>
      {isOpen && <Modal project={selectedProject} onClose={closeModal} />}
      {!isOpen && (
        <div className="project-container">
          <div className='item-5 item'>
            <ProjectCard project={project5} openModal={openModal} />
          </div>
          <div className='item-6 item'>
            <ProjectCard project={project6} openModal={openModal} />
          </div>
          <div className='item-7 item'>
            <ProjectCard project={project7} openModal={openModal} />
          </div>
          <div className="item-1 item">
            <ProjectCard project={project3} openModal={openModal} />
          </div>
          <div className="container-2">
            <div className="item-2 item">
              <ProjectCard project={project2} openModal={openModal} />
            </div>
            <div className="item-3 item">
              <ProjectCard project={project4} openModal={openModal} />
            </div>
            <div className="item-4 item">
              <ProjectCard project={project1} openModal={openModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
