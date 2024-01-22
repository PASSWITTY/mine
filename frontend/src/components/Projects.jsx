// Projects.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Projects = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => response.text())  // Use .text() to get HTML content
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML content:', error));
  }, []);

  return (
    <div>
        <Navbar />

       <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  
    </div>
   )
 
};

export default Projects;
