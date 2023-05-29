import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li className="footer__item">Страны</li>
        <li className="footer__item">Регионы</li>
        <li className="footer__item">Города</li>
        <li className="footer__item">Районы</li>
        <li className="footer__item">Аэропорты</li>
        <li className="footer__item">Отели</li>
      </ul>
      <div className="footer__copyright">
        Copyright © 1995–2023 Booking™. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
