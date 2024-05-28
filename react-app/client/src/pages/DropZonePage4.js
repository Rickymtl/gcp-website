// src/pages/DropZonePage4.js

import React from 'react';
import DropZone from '../components/DropZone';

const DropZonePage4 = () => {
  return (
    <div>
      <h2>Drop Zone 4</h2>
      <p>This zone handles Action 4: Convert text to uppercase.</p>
      <DropZone action={4} />
    </div>
  );
};

export default DropZonePage4;
