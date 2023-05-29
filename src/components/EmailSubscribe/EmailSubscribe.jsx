import React from "react";

function EmailSubscribe(props) {
  return (
    <div className="email-subscribe">
      <h2 className="email-subscribe__title">Сэкономьте время и деньги!</h2>
      <p className="email-subscribe__text">
        Подпишитесь, и мы вышлем вам лучшие предложения
      </p>
      <div>
        <input
          type="email"
          autocapitalize="off"
          required="true"
          placeholder="Ваш электронный адрес"
          title=""
          value=""
        />
        <button>Подписаться</button>
      </div>
    </div>
  );
}

export default EmailSubscribe;
