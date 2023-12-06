import React, { useState, useRef } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    // Simulating an image upload using Axios (without actual backend)
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('/upload', formData)
      .then((response) => {
        // Simulated success message
        console.log('Image uploaded successfully!', response.data);
        // Reset selectedFile after successful upload (for simulation)
        setSelectedFile(null);
      })
      .catch((error) => {
        // Simulated error message
        console.error('Error uploading image:', error);
      });
  };


  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #000000, #ff69b4, #56ccf2, #f093fb)',
        textAlign: 'center',
      }}
    >
      <div style={{ width: '80%', maxWidth: '600px', textAlign: 'center' }}>
        <div
          style={{
            backgroundImage: 'linear-gradient(135deg, #4169E1, #87CEEB, #ffffff, #FFE4E1)',
            WebkitBackgroundClip: 'text',
            display: 'inline',
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
            *THIS AREA OF OUR APP IS UNDER CONSTRUCTION. WE APPRECIATE YOUR PATIENCE.*
          </p>
        </div>
        <h2 style={{ marginBottom: '20px' }}>Upload Images</h2>
        {/* Upload Button */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }} // Hide the original file input
        />
        <button
          onClick={openFileDialog}
          style={{
            padding: '12px 24px',
            borderRadius: '50px',
            background: '#f64f59',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            outline: 'none',
          }}
        >
          {selectedFile ? 'File Selected' : 'Choose File'}
        </button>
        {/* Rest of the upload logic */}
      </div>
    </div>
  );
};

export default ImageUpload;