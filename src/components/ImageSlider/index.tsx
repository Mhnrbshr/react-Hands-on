import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

interface prop {
  url: string;
  limit: string;
  page: string;
}
interface Image {
  id: string;
  download_url: string;
}
const ImageSlider = ({ url, limit, page }: prop) => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, isLoading] = useState(false);

  const fetchData = async (url: string) => {
    try {
      isLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      if (data) {
        setImages(data);
        console.log("images", images);
        isLoading(false);
      }
    } catch (e: any) {
      setErrorMessage(e.message);
      isLoading(false);
    }
  };

  useEffect(() => {
    if (url != "") {
      fetchData(url);
    }
  }, [url]);

  if (loading) {
    <div>Loading, please wait</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      <div>
        {images.map((image, index) => (
          <img
            key={image.id}
            alt={image.download_url}
            src={image.download_url}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))}
      </div>
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
