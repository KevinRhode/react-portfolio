import React from 'react';
import projects from './projects.json'
// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Project() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <ul className="list-group" >
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects?.map((project) => (
          <li className="list-group-item">
            {`${project.title} ${project.linkToApp} (${project.linkToRepo})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
// style={{
//   display: 'flex',
//   fontFamily: 'helvetica',
//   flexDirection: 'row',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
// }}
//   return (
//     //map project.json to create cards
//     <div className="card text-center" >
//       <div className="card-header bg-warning text-white">
//        {Title}
//       </div>
//       <div className="card-body">
//         <p className="card-text">
//           {linktoapp}
//           {linktorepo}
//         </p>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={increaseTemp}
//         >
//           Raise temperature
//         </button>{' '}
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={decreaseTemp}
//         >
//           Lower temperature
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Project;
