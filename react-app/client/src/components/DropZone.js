// src/components/DropZone.js

import React, { useState } from "react";
import axios from "axios";
import "./DropZone.css";

axios.defaults.baseURL = "http://localhost:5600";

const DropZone = ({ endpoint }) => {
  const [hover, setHover] = useState(false);
  const [file, setFile] = useState(null);

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
      setFile(file);
      uploadFile(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      uploadFile(file);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(endpoint, formData, {
        responseType: "blob", // Important to handle binary data
      });
      console.log("File uploaded successfully:", endpoint, response.data);
      downloadFile(response.data, file.name);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    }
  };

  const downloadFile = (blob, filename) => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Cleanup
  };

  return (
    <div
      className={`drop-zone ${hover ? "hover" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drop files here or click to select files</p>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />
      <label htmlFor="file-upload" className="file-upload-label">
        Upload File
      </label>
    </div>
  );
};

export default DropZone;
