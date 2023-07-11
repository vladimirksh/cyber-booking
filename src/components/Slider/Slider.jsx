import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Slider({
  open,
  slideNumber,
  photos,
  handleCloseSlider,
  handleNextSlide,
  handlePrevSlide,
}) {
  return (
    <>
      {open && (
        <div className="slider">
          <FontAwesomeIcon
            className="slider__exit"
            icon={faCircleXmark}
            style={{ color: "#0071c2" }}
            onClick={() => handleCloseSlider()}
          />
          <FontAwesomeIcon
            className="slider__prev"
            icon={faCircleArrowLeft}
            style={{ color: "#0071c2" }}
            onClick={() => {
              handlePrevSlide();
            }}
          />
          <img className="slider__img" src={photos[slideNumber].src} alt="" />

          <FontAwesomeIcon
            className="slider__next"
            icon={faCircleArrowRight}
            style={{ color: "#0071c2" }}
            onClick={() => handleNextSlide()}
          />
        </div>
      )}
    </>
  );
}

export default Slider;
