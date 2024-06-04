// src/pages/DropZonePage1.js

import React from "react";
import DropZone from "../components/DropZone";

const DropZonePage1 = () => {
  return (
    <div>
      <h2>Remove Background</h2>
      <p>Drop image file here to remove background.</p>
      <DropZone endpoint="/rmbg" />
    </div>
  );
};

export default DropZonePage1;
