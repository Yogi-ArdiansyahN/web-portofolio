import React, { useState } from "react";

export default function CardProject({ images = [], description, projectName, techStack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card w-90 md:w-full mx-2 md:mx-auto p-2 rounded-lg shadow-xs shadow-blue-50">
      {/* image */}
      <div id="img-project" className="relative">
        {images.length > 0 ? (
          <>    
            <img
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              className="w-full max-w-[500px] h-[110px] object-cover rounded-t-md cursor-pointer"
              onClick={openModal}
            />

            {/* Buttons hanya tampil jika lebih dari 1 gambar */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded opacity-75 hover:opacity-100"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded opacity-75 hover:opacity-100"
                >
                  ›
                </button>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-md text-gray-500">
            No images available
          </div>
        )}
      </div>

      {/* main */}
      <div id="description-project" className="my-4">
        <p className="font-bold text-sm">{projectName}</p>
        <span className="text-xs">{description}</span>
      </div>

      {/* tech stack */}
      <div className="overflow-x-scroll pb-2">
        <div className="flex flex-nowrap gap-2 mt-1">
          {techStack.map(({ icon, techName }, index) => (
            <div
              key={index}
              className="border border-white rounded-md px-3 py-1 flex flex-col items-center gap-1 min-w-max"
            >
              {icon}
              <p className="text-[10px] text-center">{techName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh] w-full p-4">
            <img
              src={images[currentIndex]}
              alt={`Enlarged project image ${currentIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute border-2 border-black outline-2 outline-white top-2 right-2 bg-white text-black px-3 py-1 rounded-full opacity-75 hover:opacity-100"
            >
              x
            </button>
            {/* Navigation buttons in modal */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded opacity-75 hover:opacity-100"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded opacity-75 hover:opacity-100"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
