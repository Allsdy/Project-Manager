import Project from './Project';
// import { useEffect } from 'react'
import '../css/Projects.css';

var flag = true;

const Projects = ({ projects, deletePro, sortBy, setSortBy }) => {
    
    if (flag) {
        // onSort("projectName");
        setSortBy("projectName");
        flag = false;
    }

    return (
        <div className='projects-container'>
            {projects.map((project) => (<Project key={project.projectIdentifier} project={project} deletePro={deletePro} />))}
        </div>
    )
}

export default Projects
