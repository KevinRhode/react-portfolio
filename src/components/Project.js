import React from 'react';

export default function Project({projects}) {
  return (
    <div className="container">
      <h1>Projects</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects?.map((project) => (
          <li className="list-group-item" key={project.id}>
            {`${project.title} ${project.linkToApp} (${project.linkToRepo})`}
          </li>
        ))}
      </ul>
      {projects?.map((project) => (
        <div className="card text-center" key={project.id}>
          <div className="card-header bg-warning text-white">
            {project.title}
          </div>
          <div className="card-body">
            <p className="card-text">
              {project.linkToApp}
              <br />
              {project.linkToRepo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
