import { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Projects from './Projects';
import AddProject from './AddProject';
import '../css/App.css';

const App = () => {
  const [projects, setProjects] = useState([]); //The variable that contains the list of projects
  const [temp, setTemp] = useState(() => projects); //The variable that contains the backup list of projects
  const [sortBy, setSortBy] = useState("projectName"); //The variable contains the value of sortBy
  const [sortOrder, setSortOrder] = useState("ascending"); //The variable contains the value of sortOrder

  useEffect(() => { //To fetch the list from data.json
    const fetchProjects = async () => {
      const res = await fetch('./data.json')
      const data = await res.json();
      setProjects(() => data);
      setTemp(() => data);
    }
    fetchProjects();
  }, []);

  const [showAddBox, setShowAddBox] = useState(false); //The variable that determines if the add box is shown


  const addProject = (p) => { //The function to add a project into the project list
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
    // console.log(projects);
    setTemp(projects);
    // console.log(temp);
  }

  const toggleShow = () => { //Toggle the show add box
    setShowAddBox(!showAddBox);
    setSortBy("projectName");
    setSortOrder("ascending");
  }

  const deleteProject = (id) => { //Function to delete a project 
    setProjects(projects.filter((p) => p.projectIdentifier !== id));
  }

  const searchProject = (name) => { //Function to search project that contains the input value
    let arr = [];

    for (let i = 0; i < temp.length; i++) {
      arr.push(temp[i]);
    }

    arr = arr.filter((p) => p.projectName.includes(name))
    setProjects(arr);
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
      {showAddBox || <SearchBar onSearch={searchProject}
        setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />}
      {showAddBox || <Projects projects={projects} deletePro={deleteProject} sortBy={sortBy} sortOrder={sortOrder}
        setSortBy={setSortBy} setSortOrder={setSortOrder} />}
    </div>
  );
}

export default App;
