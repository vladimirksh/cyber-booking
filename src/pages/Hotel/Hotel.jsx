import React, { useState } from "react";
import Header from "../../components/Header/Header";
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Hotel(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  function handleOpenSlider(i) {
    setOpen(true);
    setSlideNumber(i);
  }

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1",
    },
  ];
  return (
    <>
      <Header />
      {open && (
        <div className={`slider `}>
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#0071c2" }} />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ color: "#0071c2" }}
          />
          <img src={photos[slideNumber].src} alt="" />

          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "#0071c2" }}
          />
        </div>
      )}
      <main className="hotel-container">
        <div className="hotel-container__wraper">
          <h2 className="hotel-container__title">Aparthotel Stare Miasto</h2>
          <div className="hotel-container__address">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#0071c2" }}
            />
            <span>Gołębia 2, Старый город, 31-007 Краков, Польша</span>
          </div>
          <span className="hotel-container__distance">
            Отличное расположение - в 500 м от центра
          </span>
        </div>

        <div className="hotel-container__images">
          {photos.map((photo, i) => (
            <img
              className="hotel-container__img"
              src={photo.src}
              alt=""
              key={i}
              onClick={() => handleOpenSlider(i)}
            />
          ))}
        </div>
        <div className="hotel-container__details">
          <div className="hotel-container__texts">
            <h2>Aparthotel Stare Miasto</h2>
            <p>
              Апарт-отель Stare Miasto находится в самом центре Старого города
              Кракова, всего в 120 метрах от Рыночной площади. К услугам гостей
              просторные современные апартаменты с бесплатным Wi-Fi. Апарт-отель
              Stare Miasto расположен в историческом здании с уникальным
              дизайном интерьера в теплых тонах с использованием кирпича и
              деревянных элементов. Во всех апартаментах Stare Miasto есть
              кондиционер, ЖК-телевизор и полностью оборудованная мини-кухня с
              холодильником и электрическим чайником. На круглосуточной стойке
              регистрации гости могут приобрести билеты и заказать экскурсии.
              Апарт-отель Stare Miasto расположен в 900 метрах от Вавельского
              замка. В окрестностях работают рестораны и кафе. Железнодорожный
              вокзал Краков-Гловни и торговый центр Galeria Krakowska находятся
              в 1,6 км.
            </p>
          </div>
          <div className="hotel-container__price">
            <h1>Преимущества этого варианта</h1>
            <span>
              Этот вариант находится в самом сердце города Краков. Оценка за
              отличное расположение: 9,7
            </span>
            <h2>
              <b>$ 945</b> (9 ночей)
            </h2>
            <button>Забронировать</button>
          </div>
        </div>
      </main>
      <EmailSubscribe />
      <Footer />
    </>
  );
}

export default Hotel;
