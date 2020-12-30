import { useState, useEffect } from 'react';
import './App.css';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

function App() {
  const [cards, setCards] = useState(robots);
  const [searchField, setSearchField] = useState('');
  console.log(cards);
  console.log('searchField', searchField);

  useEffect(() => {
    const filteredCards = cards.filter((card) => {
      return card.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setCards(filteredCards);
  }, [searchField]);

  return (
    <div className='tc'>
      <h1>Search Cards</h1>
      <SearchBox onSearchChange={setSearchField} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
