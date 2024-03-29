import { faClose } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ project, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </button>
          <h2 className='project-title'>{project.title}</h2>
          <p className='p-projects'>Description: {project.description}</p>
          <p className='p-projects'>Technologies Used: {project.tech}</p>
          <a rel="noreferrer" target='_blank' href={project.link} className="demo-button">Demo</a>
          <a rel="noreferrer" target='_blank' href={project.github} className="padding demo-button">Github</a>
        </div>
      </div>
    );
  };

  export default Modal
