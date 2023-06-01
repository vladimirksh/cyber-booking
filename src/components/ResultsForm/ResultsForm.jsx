import React, { useState } from "react";
import { DateRange } from "react-date-range";
import Occupancy from "../Occupancy/Occupancy";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";

function ResultsForm() {
  const [openDr, setOpenDr] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const location = useLocation();
  const [destination, setDestination] = useState(
    (location.state.destination = "Укажите место")
  );
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState(location.state.date);

  return (
    <form className="results-form">
      <h2 className="results-form__title">Найти</h2>
      <div className="results-form__item">
        <span className="results-form__description">
          Место / название объекта
        </span>
        <input
          className="results-form__input"
          type="text"
          placeholder={destination}
          onClick={() => {
            setOpenOption(false);
            setOpenDr(false);
          }}
        ></input>
      </div>
      <div className="results-form__item">
        <span className="results-form__description">Дата заезда</span>
        <span
          className="results-form__text"
          onClick={() => {
            setOpenOption(false);
            setOpenDr(!openDr);
          }}
        >{`от ${format(date[0].startDate, "dd/MM/yy")} до ${format(
          date[0].endDate,
          "dd/MM/yy"
        )}`}</span>
        {openDr && (
          <DateRange
            // className="search-form__date-picker"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            locale={ru}
          />
        )}
      </div>
      <div className="results-form__item">
        <span className="results-form__title">Опции</span>
        <div className="results-form__option">
          <span className="results-form__option-description">
            Минимальная цена
          </span>
          <input className="results-form__option-input" type="number" />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">
            Максимальная цена
          </span>
          <input className="results-form__option-input" type="number" />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">Взрослых</span>
          <input
            className="results-form__option-input"
            type="number"
            placeholder={option.adult}
            min={1}
          />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">Детей</span>
          <input
            className="results-form__option-input"
            type="number"
            placeholder={option.children}
            min={0}
          />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">Комнат</span>
          <input
            className="results-form__option-input"
            type="number"
            placeholder={option.room}
            min={1}
          />
        </div>
      </div>
      <button className="results-form__btn">Найти</button>
    </form>
  );
}

export default ResultsForm;
