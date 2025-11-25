import './ProjectCard.css';


function ProjectCard({ title, description, imageSrc}) {  
    return (
            <div className="project-card">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <img src={imageSrc} alt={`${title} image`} className="project-image" />
                
            </div>
            );

}

export default ProjectCard;