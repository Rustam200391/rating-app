// src/components/ReviewForm.js
import React, { useState } from "react";
import StarRating from "./StarRating";
import "./ReviewForm.css"; // Импортируем стили для формы

const ReviewForm = () => {
  const [rating, setRating] = useState(0); // Состояние для рейтинга
  const [comment, setComment] = useState(""); // Состояние для комментария
  const [isLoading, setIsLoading] = useState(false); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null); // Состояние для ошибки

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    setIsLoading(true); // Устанавливаем состояние загрузки
    setError(null); // Сбрасываем ошибку

    const review = {
      rating,
      comment,
    };

    try {
      const response = await fetch("https://example.com/api/reviews", {
        // Замените на ваш API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response data:", data); // Обработка успешного ответа
    } catch (error) {
      console.error("Error submitting review:", error);
      setError(error.message); // Устанавливаем сообщение об ошибке
    } finally {
      setIsLoading(false); // Сбрасываем состояние загрузки
      setRating(0); // Сбрасываем рейтинг
      setComment(""); // Сбрасываем комментарий
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Оставить отзыв</h2>
      <StarRating rating={rating} setRating={setRating} />{" "}
      {/* Компонент для рейтинга */}
      <textarea
        className="comment"
        placeholder="Введите ваш комментарий"
        value={comment}
        onChange={(e) => setComment(e.target.value)} // Обновляем состояние комментария при изменении
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Отправка..." : "Отправить"}
      </button>{" "}
      {/* Кнопка отправки формы */}
      {error && <p className="error">{error}</p>}{" "}
      {/* Отображение сообщения об ошибке */}
    </form>
  );
};

export default ReviewForm;
