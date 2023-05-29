import React, { useState } from "react";
import Occupancy from "../Occupancy/Occupancy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faPerson,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

function SearchForm(props) {
  const [openDr, setOpenDr] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (e, name, operation) => {
    e.preventDefault();

    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  return (
    <form className="search-form">
      <div className="search-form__item">
        <FontAwesomeIcon
          icon={faPersonWalkingLuggage}
          style={{ color: "#474747" }}
        />
        <input
          onClick={() => {
            setOpenOption(false);
            setOpenDr(false);
          }}
          className="search-form__input"
          type="text"
          placeholder="Куда вы хотите поехать?"
        />
      </div>
      <div className="search-form__item">
        <FontAwesomeIcon icon={faCalendarDay} style={{ color: "#474747" }} />
        <span
          className="search-form__text"
          onClick={() => {
            setOpenDr(!openDr);
            setOpenOption(false);
          }}
        >{`
        от 
        ${format(date[0].startDate, "dd/MM/yy")} 
        до
        ${format(date[0].endDate, "dd/MM/yy")}`}</span>
        {openDr && (
          <DateRange
            className="search-form__date-picker"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            locale={ru}
          />
        )}
      </div>
      <div className="search-form__item">
        <FontAwesomeIcon icon={faPerson} style={{ color: "#474747" }} />
        <span
          className="search-form__text"
          onClick={() => {
            setOpenOption(!openOption);
            setOpenDr(false);
          }}
        >
          {`${option.adult} взрослых ${option.children} детей ${option.room} комната`}
        </span>
        {openOption && (
          <Occupancy handleOption={handleOption} option={option} />
        )}
      </div>
      <div className="search-form__item">
        <button className="search-form__btn">Найти</button>
      </div>
    </form>
  );
}

export default SearchForm;
