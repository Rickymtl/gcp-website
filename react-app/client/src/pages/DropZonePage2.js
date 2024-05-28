// src/pages/DropZonePage2.js

import React from 'react';
import DropZone from '../components/DropZone';

const DropZonePage2 = () => {
  return (
    <div>
      <h2>Drop Zone 2</h2>
      <p>This zone handles Action 2: Basic file info.</p>
      <DropZone action={1} />
    </div>
  );
};

export default DropZonePage2;
