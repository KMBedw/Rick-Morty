import Card from "./Card";

import "./../styles/CardList.scss";

const CardList = ({ characters }) => {
  return (
    <div className="card-group">
      {characters.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  );
};

export default CardList;
