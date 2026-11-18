import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "Project 1",
      description: "This is the first project."
    },
    {
      name: "Project 2",
      description: "This is the second project."
    }
  ] 

  return (
    <div id="main">
      {projects.map((project,index)=> (
        <div key = {index}>
           <h1>{project.name}</h1>
           <h6>{project.description}</h6>
           </div>
      ))}
      </div>

      );

   
}


export default App;
