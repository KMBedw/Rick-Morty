import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

import logo from "./../assets/logo-rick-et-morty.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./../styles/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={logo} alt="logo de rick et morty" />
      </Link>
      <h1>Rick et Morty : apprentissage de react sans prise de tête </h1>
      <div className="specs-logo">
        <FontAwesomeIcon icon={faHtml5} size="6x" />
        <FontAwesomeIcon icon={faCss3Alt} size="6x" />
        <FontAwesomeIcon icon={faJs} size="6x" />
        <FontAwesomeIcon icon={faReact} size="6x" />
      </div>
    </header>
  );
};

export default Header;
