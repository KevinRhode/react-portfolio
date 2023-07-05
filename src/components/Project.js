import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from './GitHubIcon';
import { ImageBackground } from 'react-native';
// const images = require.context('../images/projects', true);
// const loadImage = imageName => (images(`./${imageName}`).default);




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
      {console.log({projects})}
      {projects?.map(({id,img,linkToApp,linkToRepo,title,desp}) => (
        
       
        <div className="card" key={id} > 
        <ImageBackground alt='img' source={require(`../images/projects/${img}`)}
        style={{width: '100%', height: '100%' }}>
        
           
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
            </p>
          </div>
          </ImageBackground> 
        </div>
      ))}
    </div>
    
    </>
  );
}
