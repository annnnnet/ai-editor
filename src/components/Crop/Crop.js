import React, { useState } from 'react';
import { contact } from '../../portfolio';
import './Crop.css';

const Crop = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSuggestCropping = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      fetch('http://localhost:5000/process_image', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          setResults(data);
        })
        .catch(error => console.error('Error:', error));
    }
  };

  const renderCroppedImages = () => {
    if (results && results.bboxes) {
      return results.bboxes.map((bbox, index) => {
        const [x1, y1, x2, y2] = bbox;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = selectedImage;
        canvas.width = x2 - x1;
        canvas.height = y2 - y1;
        ctx.drawImage(image, x1, y1, x2 - x1, y2 - y1, 0, 0, x2 - x1, y2 - y1);
        const croppedImage = canvas.toDataURL();
        return (
          <div key={index} className='cropped-image'>
            <img src={croppedImage} alt={`Cropped ${index}`} />
          </div>
        );
      });
    }
    return null;
  };

  const handleRetry = () => {
    setResults(null);
  };
  
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact' style={{ height: '80vh' }}>
      <h2 className='section__title'>Auto Cropping</h2>
      <input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        id='upload-image'
      />

      <label htmlFor='upload-image'>
        <span className='btn btn--outline' style={{margin: '30px'}}>Upload Picture</span>
      </label>
      {selectedImage && (
        <div className='selected-image'>
          <img src={selectedImage} alt='Selected for cropping' />
        </div>
      )}
      <button className='btn btn--outline' onClick={handleSuggestCropping} style={{margin: '30px'}}>
        Suggest Cropping!
      </button>
      {results && (
        <div className='results'>
          <h3>Results:</h3>
          <div className='cropped-images'>
            {renderCroppedImages()}
          </div>
          <button className='btn btn--outline' onClick={handleRetry}>
            Try Again
          </button>
        </div>
      )}
    </section>
  );
};

export default Crop;
