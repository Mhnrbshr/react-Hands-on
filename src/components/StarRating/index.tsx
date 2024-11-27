import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  const handleMouseEnter = (index: number) => {
    setHover(index);
  };
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            key={index}
            size={50}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseLeave={() => handleMouseLeave()}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
