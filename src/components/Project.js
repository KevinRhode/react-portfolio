import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from './GitHubIcon';



export default function Project({projects}) {
  return (
    <>
    <h1>Projects</h1>
    <div className="container" >
    
      {/* <ul className="list-group"> */}
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {/* {projects?.map((project) => (
          <li className="list-group-item" key={project.id}>
            {`${project.title} ${project.linkToApp} (${project.linkToRepo})`}
          </li>
        ))} */}
      {/* </ul> */}
      {projects?.map(({id,img,linkToApp,linkToRepo,title,desp}) => (
        <>
         
        <div className="card" key={id} style={{ 
          backgroundImage:`url(${img})`,   
          backgroundSize:'100%',
          backgroundRepeat: 'no-repeat',      
        }}>
          
          <div className="card-header" style={{
            alignItems:'',
            zIndex:'1',
          }}>
            
          <Link to={linkToApp} style={{
            textAlign:'start',
          }}>
                
                {title}
              </Link>
              <GitHubIcon pathToFollow={linkToRepo}></GitHubIcon>
          </div>
          <div className="card-body">
            <p className="card-text">
              {desp}
              <br />
              
              {/* <Link to={project.linkToRepo}>  
              Project Name Here
              </Link>             */}
            </p>
          </div>
        </div></>
      ))}
    </div>
    
    </>
  );
}
