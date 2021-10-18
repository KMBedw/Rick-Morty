import { faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/Details.scss";
// Hook permettant de récupèrer les paramètres d'url
import { useParams } from "react-router-dom";
import axios from "axios";
// hook react pour gérer les effects de board et les états
import { useEffect, useState } from "react";
import Episodes from "../components/Episodes";
const Details = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  // on utilise le destructuring pour récupèrer l'id passé en paramètre d'url
  const { id } = useParams();
  useEffect(() => {
    const getCharacter = async () => {
      // appel axios en synchrone
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      // récupération des data dans le réponse par destructuration
      const { data } = response;
      setCharacter(data);

      setLoading(false);
    };

    getCharacter();
  }, []);
  // affiche le loader si les données sont en cours de chargement, sinon on affiche les détails.
  return loading ? (
    <p>chargement ...</p>
  ) : (
    <article className="single-card">
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
          <div className="card__content">
            <p>{character.location.name}</p>
            <p>
              {character.name} est un spécimen{" "}
              {character.species === "Alien" ? "Alien" : "Humain"} de type{" "}
              {character.gender === "Male" ? "male" : "femelle"}.
            </p>
            {console.log(character)}
            <hr />
            {/* utilisation d'un composant card l'affichage des épisodes nécessitent des appels api et du traitement. */}
            <Episodes episodes={character.episode} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Details;
