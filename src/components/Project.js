import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "./GitHubIcon";
import { ImageBackground } from "react-native";
// const images = require.context('../images/projects', true);
// const loadImage = imageName => (images(`./${imageName}`).default);

export default function Project({ projects }) {
  return (
    <>
      <h1>Projects</h1>
      <div className="container">        
        {projects?.map(({ id, img, linkToApp, linkToRepo, title, desp }) => (
          <div className="card" key={id}>
            <ImageBackground
              alt="screen shot of the projects homescreen"
              source={require(`../images/projects/${img}`)}
              style={{ width: "100%", height: "100%" ,opacity:0.8}}
            >
              <div
                className="card-header"
                style={{
                  alignItems: "",
                  zIndex: "1",
                }}
              >
                <Link
                  to={linkToApp}
                  style={{
                    textAlign: "start",
                  }}
                >
                  {title}
                </Link>
                <GitHubIcon pathToFollow={linkToRepo}></GitHubIcon>
              </div>
              <div className="card-body">
                <p className="card-text">{desp}</p>
              </div>
            </ImageBackground>
          </div>
        ))}
      </div>
    </>
  );
}
