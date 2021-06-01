import { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Projects from './Projects';
import AddProject from './AddProject';
import '../css/App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [temp, setTemp] = useState(() => projects);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('./data.json')
      const data = await res.json();
      setProjects(() => data);
      setTemp(() => data);
    }
    fetchProjects();
  }, []);
  
  const [showAddBox, setShowAddBox] = useState(false);
  const [sortBy, setSortBy] = useState("projectName");
  const [sortOrder, setSortOrder] = useState("ascending");

  const addProject = (p) => {
    if (p.projectName === "") {
      alert("please enter a project name");
      return;
    }

    if (p.projectIdentifier === "") {
      alert("please enter an id");
      return;
    }

    if (p.startDate === "") {
      alert("please enter a start date");
      return;
    }

    if (p.endDate === "") {
      alert("please enter an end date");
      return;
    }

    if (p.endDate < p.startDate) {
      alert("The end date should not be eailer than the start date, please enter a correct end date");
      return;
    }

    setSortBy(sortBy);
    //The setProject function does not work due to some kind of asynchronous reasons
    //So I have to use push method QWQ
    projects.push(p);
    setSortBy(sortBy);
    console.log(projects);
    setTemp(projects);
    // console.log(temp);
  }

  const toggleShow = () => {
    setShowAddBox(!showAddBox);
    setSortBy("projectName");
    setSortOrder("ascending");
  }

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.projectIdentifier !== id));
  }

  const searchProject = (name) => {
    let arr = [];

    for (let i = 0; i < temp.length; i++) {
      arr.push(temp[i]);
    }

    arr = arr.filter((p) => p.projectName.includes(name))
    setProjects(arr);

    console.log(projects);
    console.log(temp);
  }

  const sort = (attr, sortOrder) => {
    let a = [];
    if(sortOrder === "descending"){
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
    else{
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

    let array = [];
    for (let i = 0; i < a.length; i++) {
      array.push(a[i]);
    }

    setProjects(array);
    setTemp(array);
  }

  // const reverseProjects = () => {
  //   let a = [];
  //   for (let i = projects.length - 1; i >= 0; i--) {
  //     a.push(projects[i]);
  //   }
  //   let array = [];
  //   for (let i = 0; i < a.length; i++) {
  //     array.push(a[i]);
  //   }
  //   // console.log(array);
  //   setProjects(array);
  //   setTemp(array);
  // }

  return (
    <div className="container" style={
      showAddBox === true ?
        {
          width: 600 + "px"
          // backgroundColor: "red"
        } : {
          width: 1000 + "px"
        }
    }>
      <Header onToggle={toggleShow} txtChange={showAddBox} />
      {showAddBox && <AddProject onAdd={addProject} onToggle={toggleShow} />}
      {showAddBox || <SearchBar onSearch={searchProject} onSort={sort}
        setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />}
      {showAddBox || <Projects projects={projects} deletePro={deleteProject} sortBy={sortBy} setSortBy={setSortBy} />}
    </div>
  );
}

export default App;
