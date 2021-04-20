import { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

export interface CardsTypes {
  name: string;
  id: number;
  email: string;
}

// type CardsTypes = {
//   name: string;
//   id: number;
//   email: string;
// };

function App() {
  const [cards, setCards] = useState<Array<CardsTypes>>([]);
  const [searchField, setSearchField] = useState<string>('');

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

  const filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return cards && !cards.length ? (
    <h3>Loading...</h3>
  ) : (
    <div className='tc'>
      <h1 className='f1'>Search Cards</h1>
      <SearchBox onSearchChange={setSearchField} />
      <Scroll>
        <ErrorBoundry>
          <CardList cards={filteredCards} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
