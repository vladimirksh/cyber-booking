import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <h1 className="banner__title">Войдите в аккаунт и сэкономьте</h1>
      <p className="banner__description">
        Получайте вознаграждение за свои путешествия - экономьте от 10% с
        помощью бесплатной учетной записи
      </p>
      <button className="banner__btn">Войти или зарегестрироваться</button>
    </div>
  );
}

export default Banner;
