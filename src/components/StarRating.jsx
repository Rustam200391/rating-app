// src/components/StarRating.js
import React, { useState } from "react";
import "./StarRating.css"; // Импортируем стили для звезд

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null); // Состояние для отслеживания наведенной звезды

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)} // Устанавливаем рейтинг при клике
            />
            <svg
              className="star"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)} // Устанавливаем наведенный рейтинг
              onMouseLeave={() => setHover(null)} // Сбрасываем наведенный рейтинг
            >
              <path d="M12 .587l3.668 7.431 8.2 1.151-6.034 5.973 1.425 8.183L12 18.896l-7.259 3.829 1.425-8.183L.132 9.169l8.2-1.151z" />
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
