import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faPerson,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";

function SearchForm(props) {
  return (
    <form className="search-form">
      <div className="search-form__item">
        <FontAwesomeIcon
          icon={faPersonWalkingLuggage}
          style={{ color: "#474747" }}
        />
        <input className="" type="text" placeholder="Куда вы хотите поехать?" />
      </div>
      <div className="search-form__item">
        <FontAwesomeIcon icon={faCalendarDay} style={{ color: "#474747" }} />
        <span className="search-form__text">от даты до даты</span>
      </div>
      <div className="search-form__item">
        <FontAwesomeIcon icon={faPerson} style={{ color: "#474747" }} />
        <span className="search-form__text">
          2 взрослых 2 ребенка 1 комната
        </span>
      </div>
      <div className="search-form__item">
        <button className="search-form__btn">Найти</button>
      </div>
    </form>
  );
}

export default SearchForm;
