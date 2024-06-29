// src/components/ReviewForm.js
import React, { useState } from "react";
import StarRating from "./StarRating";
import "./ReviewForm.css"; // Импортируем стили для формы

const ReviewForm = () => {
  const [rating, setRating] = useState(0); // Состояние для рейтинга
  const [comment, setComment] = useState(""); // Состояние для комментария

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    // Обработчик отправки формы
    console.log("Рейтинг:", rating);
    console.log("Комментарий:", comment);
    // Очистка формы после отправки
    setRating(0);
    setComment("");
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
      <button type="submit">Отправить</button> {/* Кнопка отправки формы */}
    </form>
  );
};

export default ReviewForm;
