function ImageModal({ productImages, currentIndex, setCurrentIndex, closeModal }) {
  const productImage = productImages[currentIndex];

  const nextImage = () => {
    if (currentIndex < productImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      
      <button
        onClick={prevImage}
        disabled={currentIndex === 0}
        className="bg-white text-green-500 px-3 font-bold py-1 text-4xl rounded-full m-2 disabled:opacity-50"
      >
        &larr;
      </button>

      <div className="relative bg-white m-[100px] p-4 rounded max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-xl font-bold bg-red-500 px-4 py-2 rounded-full"
          onClick={closeModal}
        >
          X
        </button>

        <img
          src={productImage.image}
          alt={productImage.name}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <button
        onClick={nextImage}
        disabled={currentIndex === productImages.length - 1}
        className="bg-white text-green-500 px-3 font-bold py-1  text-4xl rounded-full  m-2 disabled:opacity-50"
      >
       &rarr;
      </button>
    </div>
  );
}

export default ImageModal;
