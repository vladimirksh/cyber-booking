import React from "react";

function EmailSubscribe(props) {
  return (
    <div className="email-subscribe">
      <h2 className="email-subscribe__title">Сэкономьте время и деньги!</h2>
      <p className="email-subscribe__text">
        Подпишитесь, и мы вышлем вам лучшие предложения
      </p>
      <form className="email-subscribe__form">
        <input
          className="email-subscribe__input"
          type="email"
          autoCapitalize="off"
          required={true}
          placeholder="Ваш электронный адрес"
          // value=""
        />
        <button className="email-subscribe__button">Подписаться</button>
      </form>
    </div>
  );
}

export default EmailSubscribe;
