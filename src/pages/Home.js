import { useState, useEffect } from "react";
import axios from "axios";

import CardList from "../components/CardList";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character`
      );
      const { results } = response.data;
      setCharacters(results);
      setLoading(false);
    };
    getCharacters();
  }, []);
  return loading ? <p>chargement ...</p> : <CardList characters={characters} />;
};

export default Home;
