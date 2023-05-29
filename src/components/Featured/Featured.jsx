import React from "react";

function Featured(props) {
  return (
    <section className="featured">
      <div className="featured__item">
        <img
          className="featured__img"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o="
          alt=""
        />
        <div className="featured__description">
          <h3 className="featured__title">Талин</h3>
          <p className="featured__text">Спецпредложение</p>
        </div>
      </div>
      <div className="featured__item">
        <img
          className="featured__img"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o="
          alt=""
        />
        <div className="featured__description">
          <h3 className="featured__title">Талин</h3>
          <p className="featured__text">Спецпредложение</p>
        </div>
      </div>
      <div className="featured__item">
        <img
          className="featured__img"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o="
          alt=""
        />
        <div className="featured__description">
          <h3 className="featured__title">Талин</h3>
          <p className="featured__text">Спецпредложение</p>
        </div>
      </div>
    </section>
  );
}

export default Featured;
