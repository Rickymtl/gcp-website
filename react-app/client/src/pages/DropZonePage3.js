// src/pages/DropZonePage1.js

import React from 'react';
import DropZone from '../components/DropZone';

const DropZonePage3 = () => {
  return (
    <div>
      <h2>Drop Zone 3</h2>
      <p>This zone handles Action 3: Basic file info.</p>
      <DropZone action={3} />
    </div>
  );
};

export default DropZonePage3;
