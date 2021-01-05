import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div>
      {cards?.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            email={card.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
