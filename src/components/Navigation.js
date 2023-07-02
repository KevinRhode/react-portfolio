import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './form/Contact';

import Project from './Project';
import projects from './projects';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
         <About />
      );
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Project projects={projects} />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* Here we are calling the footer which will return a component  */}
      <Footer/>
    </>
  );
}
