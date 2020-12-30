import logo from './logo.svg';
import './App.css';
import { robots } from './robots';
import CardList from './CardList';

function App() {
  console.log(robots);
  return (
    <div className='App'>
      <h1>Search Cards</h1>

      <CardList cards={robots} />
    </div>
  );
}

export default App;
