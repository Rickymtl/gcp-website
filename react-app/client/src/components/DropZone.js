// src/components/DropZone.js

import React, { useState } from 'react';

const DropZone = ({ action, title, description }) => {
  const [hover, setHover] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setHover(true);
  };

  const handleDragLeave = () => {
    setHover(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setHover(false);
    const files = event.dataTransfer.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        performAction(action, file, contents);
      };

      reader.readAsText(file); // Read file as text for simplicity
    }
  };

  const performAction = (action, file, contents) => {
    switch (action) {
      case 1:
        alert(`Action 1: File name is ${file.name}`);
        break;
      case 2:
        alert(`Action 2: File content is:\n${contents}`);
        break;
      case 3:
        const wordCount = contents.split(/\s+/).length;
        alert(`Action 3: The file contains ${wordCount} words.`);
        break;
      case 4:
        const upperCaseContent = contents.toUpperCase();
        alert(`Action 4: File content in uppercase:\n${upperCaseContent}`);
        break;
      default:
        console.error('Unknown action');
    }
  };

  return (
    <div
      className={`drop-zone ${hover ? 'hover' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <p>Drop files here</p>
    </div>
  );
};

export default DropZone;
