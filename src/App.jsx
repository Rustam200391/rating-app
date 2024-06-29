import React from "react";
import ReviewForm from "./components/ReviewForm";
import "./App.css"; // Импортируем стили для приложения

const App = () => {
  return (
    <div className="App">
      <h1>Форма отзыва</h1>
      <ReviewForm /> {/* Компонент формы отзыва */}
    </div>
  );
};

export default App;
