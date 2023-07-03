import React from "react";




export default function Resume() {
    return (
      <div className="resume-form">
        <div className="main">
          <div className="edu-exp">
            <div>
            <h3 className="resume-title">
              Kevin Rhode 
              <span>, </span>
              <span className="resume-subtitle"> 
                 Full Stack Developer and Game Technican
              </span>
            </h3>
            {/* <form action="" target="_blank">
            <input type="submit" className="resume-btn" value="Download">
          </form> */}
            <article className="objective">
              <h4 className="resume-bold">Professional Summary</h4>
              <p className="sm">
                Software Developer with excellent on-site training and support
                experience. Efficient trouble shooter with a consistent track
                record of finding solutions to existing and new coding issues.
                Providing a seamless experience for customers.
              </p>
            </article>
            <article>
              <div>
                <h4 className="resume-bold">Employment History</h4>
                <p className="resume-bold">
                  Games & Technology Manager, Craigs Cruisers OpCo
                  <span>Oct 2021 - Current</span>
                </p>
                <p className="resume-bold">
                  Technical Director, Craigs Cruisers Family Fun Center{" "}
                  <span>Feb 2021 - Oct 2022</span>
                </p>
                <ul className="resume-list">
                  <li className="sm">
                    Developed ASP.NET site utilizing Intercard API for seamless
                    usage at other locations
                  </li>
                  <li className="sm">
                    Developed/Maintained Work Order Application for Silver
                    Lake’s Location
                  </li>
                  <li className="sm">
                    Support various software: Advantage POS, Intercard, Ideal
                    One POS, Embed Cardless system
                  </li>
                  <li className="sm">
                    Install and support network systems, including workstations,
                    servers, and infrastructure devices
                  </li>
                  <li className="sm">
                    Provide staff assistance and training in the use of
                    technology
                  </li>
                  <li className="sm">
                    Ensure accurate inventory of devices, related hardware, and
                    software equipment
                  </li>
                  <li className="sm">
                    Support network infrastructure needed by various software
                  </li>
                  <li className="sm">
                    Support various operating systems: Windows 10, 7, Xp,
                    Raspberry Pi OS
                  </li>
                  <li className="sm">
                    Coordinates, responds, tracks, and follow-up on multiple
                    location issues with Arcade Tracker ticketing system
                  </li>
                  <li className="sm">
                    Inventory management for multiple location of games, prizes,
                    and parts
                  </li>
                  <li className="sm">
                    Handle ticket issues at various locations as they arise and
                    plan trips accordingly to manage time effectively
                  </li>
                  <li className="sm">
                    Follow up with staff when appropriate with site related
                    issues
                  </li>
                  <li className="sm">
                    Inspect systems/equipment, troubleshoot faults, and replaced
                    malfunctioning parts with new or repaired components
                  </li>
                  <li className="sm">
                    Maintain energy and enthusiasm in fast-paced environments
                  </li>
                  <li className="sm">
                    Perform duties in accordance with all applicable standards,
                    policies, and regulatory guidelines to promote safe,
                    positive, and a professional working environment
                  </li>
                  <li className="sm">
                    Communicate proactively with guests and staff
                    troubleshooting problems and providing guidance on
                    proprietary systems/equipment
                  </li>
                </ul>
              </div>
              <div>
                <p className="resume-bold">
                  Support and Development Manager,&nbsp;PUREPOS, Grandvile MI
                  <span>May 2017 – Feb 2021</span>
                </p>
                <ul className="resume-list">
                  <li className="sm">
                    Lead version control efforts for FormulaPOS, employing
                    GitHub and other public and open-source repositories
                  </li>
                  <li className="sm">
                    Authored code fixes and enhancements for inclusion in future
                    code releases and patches of FormulaPOS
                  </li>
                  <li className="sm">
                    Coordinated, responded, tracked and followed-up on customer
                    problem reports/technical support requests
                  </li>
                  <li className="sm">
                    Completed documentation and procedures for installation and
                    maintenance including database modification, and deployment
                    requirements
                  </li>
                  <li className="sm">
                    Trained staff during demonstrations, meetings, and
                    conferences
                  </li>
                  <li className="sm">Supported Various Point of Sale system</li>
                </ul>
              </div>
              <div>
                <p className="resume-bold">
                  Game Technican, Craigs Cruisers Family Fun Center, Wyoming
                  MI&nbsp;<span>Dec 2015 – May 2017</span>
                </p>
                <ul className="resume-list">
                  <li className="sm">
                    Inspected systems, troubleshot faults and replaced
                    malfunctioning parts with new or repaired components
                  </li>
                  <li className="sm">
                    Maintained energy and enthusiasm in fast-paced environment
                  </li>
                  <li className="sm">
                    Created spreadsheets in Microsoft Excel for daily, weekly
                    and monthly reporting
                  </li>
                  <li className="sm">
                    Performed duties in accordance with all applicable
                    standards, policies and regulatory guidelines to promote
                    safe working environment
                  </li>
                  <li className="sm">
                    Managed project requirements and accomplished objectives by
                    self-monitoring progress and promptly solving issues
                  </li>
                  <li className="sm">
                    Communicated proactively with guests to troubleshoot
                    problems and provide guidance
                  </li>
                  <li className="sm">
                    Developed an Arduino based solution to automate manual
                    process
                  </li>
                </ul>
              </div>
            </article>
           
            
            </div>
            <div className="sidebar">
            <article>
              <h4 className="resume-bold">Education</h4>
              <div>
                <p className="resume-bold">Grand Rapids Community College</p>
                <p className="sm">Associate's Degree: Computer Programing</p>
                <p className="sm">
                  Job Training - Certificate of Compeletion: Computer Support
                  Technician
                </p>
              </div>
              <div>
                <p className="resume-bold">Mount Pleasant High School</p>
                <p className="sm">Diploma</p>
              </div>
            </article>
            <article>
              <h4 className="resume-bold">Contact</h4>
              <p className="sm">Wyoming MI, 49418</p>
              <a className="sm" href="mailto:kevinrhode@hotmail.com">
                KevinRhode@Hotmail.com
              </a>
            </article>
            <article >
              <p className="resume-bold">Skills</p>
              <p className="sm">Ability to Multitask</p>
              <p className="sm">Ability to Work Under Pressure</p>
              <p className="sm">Ability to Work in a Team</p>
              <p className="sm">HTML5</p>
              <p className="sm">Bootstrap</p>
              <p className="sm">Bulma CSS</p>
              <p className="sm">JavaScript</p>
              <p className="sm">jQuery</p>
              <p className="sm">Node.js</p>
              <p className="sm">MySQL</p>
              <p className="sm">MongoDB</p>
              <p className="sm">Git</p>
              <p className="sm">Microsoft Office Suite</p>
              <p className="sm">Interpersonal Skills</p>
              <p className="sm">Creativity</p>
              <p className="sm">Problem Solving</p>
              <p className="sm">Decision Making</p>
              <p className="sm">Computer Skills</p>
              <p className="sm">Effective Time Management</p>
              <p className="sm">Fast Learner</p>
              <p className="sm">Adaptability</p>
              <p className="sm">Customer Service</p>
              <p className="sm">Communication Skills</p>
              <p className="sm">Detail-oriented</p>
            </article>
            <article >
              <p className="resume-bold">Hobbies</p>
              <p className="sm">
                Spending Time with Friends, playing card games, playing board
                games, playing video games, listening to music, Watching Hockey
              </p>
            </article>
            </div>
          </div>
        </div>
      </div>
    );
}