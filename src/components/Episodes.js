import axios from "axios";
import { useEffect, useState } from "react";

const Episodes = ({ episodes }) => {
  const [episodesInfos, setEpisodesInfos] = useState([]);
  //   récupère les infos épisodes via un appel api, l'assemble dans un objet qui est poussé dans le tableau des infos épisodes de chaque personnage
  const getEpisode = async (episodeUrl) => {
    const response = await axios(episodeUrl);
    const { name, air_date, episode, id } = response.data;

    setEpisodesInfos((episodesInfos) => [
      ...episodesInfos,
      { name, air_date, episode, id },
    ]);
  };

  //   au chargement du composant, on parcours les liens des épisodes pour récupérer les données.
  useEffect(() => {
    episodes.forEach((episodeUrl) => {
      getEpisode(episodeUrl);
    });
  }, []);
  return (
    <section>
      <h3>Épisodes : </h3>
      <ul>
        {episodesInfos.map(
          (episodeInfos) =>
            episodeInfos && (
              <li key={episodeInfos.id}>
                <strong>{episodeInfos.name}</strong> - {episodeInfos.episode} -
                date de diffusion : {episodeInfos.air_date}
              </li>
            )
        )}
      </ul>
    </section>
  );
};

export default Episodes;
