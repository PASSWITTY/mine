
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';


const Skills = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then(response => response.text())  
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

export default Skills;
