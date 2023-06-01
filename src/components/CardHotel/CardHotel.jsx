import React from "react";

function CardHotel(props) {
  return (
    <section className="card-hotel">
      <img
        className="card-hotel__img"
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/108436070.jpg?k=a72e3ecb72ddea6c102769dc1aa9a0da60d53fe632562f33c08d8fd7d9ae7b5e&o=&hp=1"
        alt=""
      />
      <div className="card-hotel__description">
        <h1 className="card-hotel__title">City Towers Apartment</h1>
        <span className="card-hotel__distance">0,7 км от центра</span>
        <span className="card-hotel__taxi">Трансфер от/до аэропорта</span>
        <span className="card-hotel__sub-title">Кондиционер, Отопление</span>
        <span className="card-hotel__canscel">
          Бесплатная отмена бронирования
        </span>
        <span className="card-hotel__cansel-subt">
          Вы можете отменить заказ позже, так что зафиксируйте эту выгодную цену
          сегодня!
        </span>
      </div>
      <div className="card-hotel__details">
        <div className="card-hotel__details-rating">
          <span className="card-hotel__details-rating-text">Очень хорошо</span>
          <span className="card-hotel__details-rating-num">8.9</span>
        </div>
        <div className="card-hotel__details-text">
          <span className="card-hotel__details-text-price">10 000 р</span>
          <button className="card-hotel__details-text-btn">Показать</button>
        </div>
      </div>
    </section>
  );
}

export default CardHotel;
