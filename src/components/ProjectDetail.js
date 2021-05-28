const ProjectDetail = ({ project }) => {
    return (
        <div className='project-detail-container'>
            <div className='project-detail-des'>
                {project.description}
            </div>
            <div className='project-detail-date'>
                <p className='date'>{project.startDate}</p>
                <p className='date'>{project.endDate}</p>
            </div>    
        </div>
    )
}

export default ProjectDetail
