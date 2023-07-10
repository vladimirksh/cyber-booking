import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";

function ResultsForm() {
  const [openDr, setOpenDr] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state.destination || "Куда вы хотите поехать?"
  );
  const [option, setOption] = useState(
    location.state.option || { adult: 1, children: 0, room: 1 }
  );
  const [date, setDate] = useState(
    location.state.date || {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  );

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
          <input className="results-form__option-input" type="number" min={0} />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">
            Максимальная цена
          </span>
          <input className="results-form__option-input" type="number" min={0} />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">Взрослых</span>
          <input
            className="results-form__option-input"
            type="number"
            placeholder={option.adult || 1}
            min={1}
          />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">Детей</span>
          <input
            className="results-form__option-input"
            type="number"
            placeholder={option.children || 0}
            min={0}
          />
        </div>
        <div className="results-form__option">
          <span className="results-form__option-description">Комнат</span>
          <input
            className="results-form__option-input"
            type="number"
            placeholder={option.room || 1}
            min={1}
          />
        </div>
      </div>
      <button className="results-form__btn">Найти</button>
    </form>
  );
}

export default ResultsForm;
