// src/pages/DropZonePage1.js

import React from 'react';
import DropZone from '../components/DropZone';

const DropZonePage1 = () => {
  return (
    <div>
      <h2>Drop Zone 1</h2>
      <p>This zone handles Action 1: Basic file info.</p>
      <DropZone action={1} />
    </div>
  );
};

export default DropZonePage1;
