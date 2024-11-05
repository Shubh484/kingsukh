import React, { useState } from "react";
import image1 from "../../resources/ayodhya.webp";
import image2 from "../../resources/baranti.webp";
import image3 from "../../resources/baranti.webp";
import image4 from "../../resources/mithonDam.webp";
import image5 from "../../resources/palash.webp";
import image6 from "../../resources/recep.jpg";
import image7 from "../../resources/service.jpg";
import image8 from "../../resources/small.jpg";
import image9 from "../../resources/large.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image6,
  image7,
  image8,
  image9,
];

const GalleryModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-lg"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-4 text-white text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Current"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModel;
