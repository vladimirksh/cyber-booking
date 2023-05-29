import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faBed,
  faBicycle,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

function SiteMenu(props) {
  const categories = [
    {
      name: faBed,
      text: "Жилье",
      path: "/",
    },
    {
      name: faPlane,
      text: "Авиабилеты",
      path: "/flight",
    },
    {
      name: faCar,
      text: "Аренда машин",
      path: "/cars",
    },
    {
      name: faBicycle,
      text: "Варианты досуга",
      path: "/attractions",
    },
    {
      name: faTaxi,
      text: "Такси от/до аэропорта",
      path: "/taxi",
    },
  ];

  const categorie = categories.map(({ name, text, path }, i) => (
    <li className="site-nav__item" key={i}>
      <NavLink to={path} className="site-nav__item-link">
        <FontAwesomeIcon icon={name} style={{ color: "#fff" }} />
        <span>{text}</span>
      </NavLink>
    </li>
  ));

  return <ul className="site-nav">{categorie}</ul>;
}

export default SiteMenu;
