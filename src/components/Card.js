import {
  faCross,
  faMapMarkerAlt,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./../styles/Card.scss";
const Card = ({ character }) => {
  return (
    <div className="card">
      <div className="card__photo">
        <img src={character.image} alt={`photo de ${character.name}`} />
      </div>
      <div className="card__body">
        <h2 className="card__heading">
          {/* affichage conditionnel des croix des morts */}
          {character.status == "Dead" && (
            <strong>
              <FontAwesomeIcon icon={faCross} />
            </strong>
          )}
          {character.name}
        </h2>
        <p className="card__content">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {character.location.name}
        </p>
        <p className="card__link">
          <Link to={`/details/${character.id}`}>
            Détails <FontAwesomeIcon icon={faArrowCircleRight} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
