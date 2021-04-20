import Card from './Card';

type CardsTypes = {
  name: string;
  id: string;
  email: string;
};

const CardList = ({ cards }: { cards: Array<CardsTypes> }) => {
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
