import Project from './Project';
import { useEffect } from 'react'
import '../css/Projects.css';


const Projects = ({ projects, deletePro, setSortBy, setSortOrder, onSort, sortBy, sortOrder}) => {
    // useEffect(() => { //Do the sort everytime sortBy and sortOrder changes
    //     onSort(sortBy, sortOrder);
    // }, [sortBy, sortOrder]);

    const sort = (attr, so) => { //Function to sort project by selected options
        let a = [];
        if (so === "descending") {
          if (attr === "projectName") {
            a = (projects.sort((a, b) => {
              if (a.projectName > b.projectName) return -1;
              else return 1;
            }));
          }
          else {
            a = (projects.sort((a, b) => {
              let date1 = new Date(a.startDate);
              let date2 = new Date(b.startDate);
    
              if (date1 > date2) return -1;
              else return 1;
            }));
          }
        }
        else {
          if (attr === "projectName") {
            a = (projects.sort((a, b) => {
              if (a.projectName > b.projectName) return 1;
              else return -1;
            }));
          }
          else {
            a = (projects.sort((a, b) => {
              let date1 = new Date(a.startDate);
              let date2 = new Date(b.startDate);
    
              if (date1 > date2) return 1;
              else return -1;
            }));
          }
        }
        return a;  
      }

      useEffect(() => { //Do the sort everytime sortBy and sortOrder changes
        sort(sortBy, sortOrder);
      }, [sortBy, sortOrder]);

    return (
        <div className='projects-container'>
            {sort(sortBy, sortOrder).map((project) => (<Project key={project.projectIdentifier} project={project} deletePro={deletePro} />))}
        </div>
    )
}

export default Projects
