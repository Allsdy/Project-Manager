import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ProcessBar from './ ProgressBar';
import ProjectDetail from './ProjectDetail';
import '../css/Project.css';

const Project = ({ project, deletePro }) => {
    const [toggleDetail, setToggleDetail] = useState(false);

    const onToggleDetail = () =>{
        setToggleDetail(!toggleDetail);
    }

    return (
        <>
            <div className='project' onClick={() => onToggleDetail()}>
                <p className='project-name'>{project.projectName}</p>
                <ProcessBar project={project}/>
                <FaTimes style={{cursor:'pointer'}} onClick={() => deletePro(project.projectIdentifier)}/>
            </div>
            {toggleDetail ? <ProjectDetail project={project}/> : ""}
        </>
    )
}

export default Project
