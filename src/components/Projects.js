import Project from './Project';
import '../css/Projects.css';

const Projects = ({ projects, deletePro }) => {
    return (
        <div className='projects-container'>
            {projects.map((project) => (<Project key={project.projectIdentifier} project={project} deletePro={deletePro}/>))}
        </div>
    )
}

export default Projects
