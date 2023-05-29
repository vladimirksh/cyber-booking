import React from "react";

function Occupancy({ handleOption, option }) {
  let { adult, children, room } = option;

  const occupancy = [
    {
      ru: "взрослых",
      en: "adult",
      num: adult,
      min: 1,
    },
    { ru: "детей", en: "children", num: children, min: 0 },
    { ru: "комнат", en: "room", num: room, min: 1 },
  ];

  return (
    <div className="occupancy">
      {occupancy.map((occ, i) => (
        <div className="occupancy__item" key={i}>
          <span className="occupancy__text">{occ.ru}</span>
          <div className="occupancy__counter">
            <button
              disabled={occ.num <= occ.min}
              className="occupancy__button"
              onClick={(e) => handleOption(e, occ.en, "d")}
            >
              -
            </button>
            <span className="occupancy__number">{occ.num}</span>
            <button
              className="occupancy__button"
              onClick={(e) => handleOption(e, occ.en, "i")}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Occupancy;
