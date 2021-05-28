import { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Projects from './Projects';
import AddProject from './AddProject';

import '../css/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    {
      "projectName": "Library Management System",
      "projectIdentifier": "1",
      "description": "Library management is a project that manages and stores books information electronically according to students needs",
      "startDate": "2021-01-01",
      "endDate": "2021-01-31"
    },
    {
      "projectName": "CRM System",
      "projectIdentifier": "2",
      "description": "CRM (Customer Relationship Management) systems help businesses organize relationships with their customers. ",
      "startDate": "2020-02-01",
      "endDate": "2020-09-30"
    },
    {
      "projectName": "Online Charity Management System",
      "projectIdentifier": "3",
      "description": "This charity management system will help NGOs to find donors easily.",
      "startDate": "2021-02-01",
      "endDate": "2022-02-28"
    },
    {
      "projectName": "Visitor Indicator System",
      "projectIdentifier": "4",
      "description": "This doorbell cum visitor indicator circuit can give identification of the visitor to your home in your absence.",
      "startDate": "2019-07-09",
      "endDate": "2020-01-31"
    },
    {
      "projectName": "E-Commerce Website for Visually Impaired",
      "projectIdentifier": "5",
      "description": "An ecommerce website is developed to assist blind people that automatically recognizes clothing patterns and colours.",
      "startDate": "2021-01-01",
      "endDate": "2021-05-05"
    }
  ]);
  const [temp, setTemp] = useState(projects);
  const [showAddBox, setShowAddBox] = useState(false);

  const addProject = (p) => {
    if(p.projectName === ""){
      alert("please enter a project name");
      return;
    }
    setProjects([...projects, p]);
    setTemp(projects);
  }

  const toggleShow = () => {
    setShowAddBox(!showAddBox);
  }

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.projectIdentifier !== id));
  }

  const searchProject = (name) => {
    let arr = [];
    for(let i = 0; i < temp.length; i ++){
      arr.push(temp[i]);
    }
    arr = arr.filter((p) => p.projectName.includes(name))
    setProjects(arr);
  }

  const sortName = (attr) => {
    let a = [];
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

    let array = [];
    for (let i = 0; i < a.length; i++) {
      array.push(a[i]);
    }
    setProjects(array);
  }

  const reverseProjects = () => { 
    let a = [];
    for(let i = projects.length - 1; i >= 0; i--){
      a.push(projects[i]);
    }
    let array = [];
    for (let i = 0; i < a.length; i++) {
      array.push(a[i]);
    }
    // console.log(array);
    setProjects(array);
  }

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const res = await fetch('./data.json')
  //     const data = await res.json();
  //     setProjects(data);
  //   }
  //   fetchProjects();
  // });

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
      {showAddBox || <SearchBar onSearch={searchProject} onSortName={sortName} onReverse={reverseProjects}/>}
      {showAddBox || <Projects projects={projects} deletePro={deleteProject}/>}
    </div>
  );
}

export default App;
