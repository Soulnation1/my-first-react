import { useEffect, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

const Images = () => {
  const [productImages, setProductImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
const [displayType, setDisplayType] = useState(() => {
    return localStorage.getItem("galleryView") || "grid";
  });
  useEffect(() => {
     localStorage.setItem("galleryView", displayType);
    async function getProductImages() {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setProductImages(data.recipes);
    }
    getProductImages();
  }, [displayType]);




  return (
    <>
      <div className="bg-teal-100/30 rounded-xl p-3">
        <div className=" w-[30%] flex gap-6  mb-4">
        <button
          onClick={() => setDisplayType("grid")}
          className=" p-3 rounded-xl text-xl bg-blue-500  transition hover:scale-105 "
        >
          Grid view
        </button>
        <button
          onClick={() => setDisplayType("list")}
          className=" p-3 rounded-xl text-xl bg-red-500  transition hover:scale-105"
        >
          List view
        </button>
      </div>
      <div
        className={
          displayType === "grid"
            ? "grid grid-cols-3 gap-6  p-6 border-2 mb-[150px]"
            : " flex flex-col  gap-6  p-10 border-2 mb-[150px]"
        }
      >
        {productImages.map((productImage,index) => (
          <div
            key={productImage.id}
            className={
              displayType === "grid"
                ? " flex flex-col  items-center justify-center hover:scale-105 transition"
                : " flex flex-row  w-full gap-10 px-6 py-2 text-xl bg-white rounded-xl  shadow  hover:scale-105  transition"
            }
          >
            <div>
              <img
                src={productImage.image}
                alt={productImage.name}
                className={
                  displayType === "grid"
                    ? " h-48 border-1 p-4 rounded-full cursor-pointer"
                    : " h-[140px] border-1 p-4 mr-[50px] rounded-full  cursor-pointer"
                }
                onClick={() => setCurrentIndex(index)}
              />
            </div>
            <div
              className="  flex justify-center items-center text-center  "
            >
              {productImage.name}
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <ImageModal
          productImages={productImages}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          closeModal={() => setCurrentIndex(null)}
        />
      )}
      </div>
    </>
  );
};

export default Images;
