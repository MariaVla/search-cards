import { useState, useEffect } from 'react';
import './App.css';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

function App() {
  const [cards, setCards] = useState([]);
  const [searchField, setSearchField] = useState('');

  // useCallback will return a memoized version of the callback that only
  // changes if one of the dependencies has changed.
  // const filteredCards = useCallback(
  //   () =>
  //     cards.filter((card) => {
  //       return card.name.toLowerCase().includes(searchField.toLowerCase());
  //     }),
  //   [JSON.stringify(cards), searchField]
  // );

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setCards(users));
  }, []);

  const filteredCards = cards?.filter((card) => {
    return card.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1 className='f1'>Search Cards</h1>
      <SearchBox onSearchChange={setSearchField} />
      <CardList cards={filteredCards} />
    </div>
  );
}

export default App;
