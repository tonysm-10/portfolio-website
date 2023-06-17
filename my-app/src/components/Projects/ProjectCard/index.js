import './index.scss';


const ProjectCard = ({ project, openModal }) => {
  const handleClick = () => {
    openModal(project);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        className="project-image"
        src={project.image}
        alt="img"
      />
    </div>
  );
};

export default ProjectCard;
