import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { requestCards, setSearchField } from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
// searchCards is the name of the reducer
const mapStateToProps = (state) => {
  return {
    searchField: state.searchCards?.searchField,
    cards: state.requestCards.cards,
    isPending: state.requestCards.isPending,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCards: () => dispatch(requestCards()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestCards();
  }

  render() {
    const { cards, searchField, onSearchChange, isPending } = this.props;

    const filteredCards = cards?.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='f1'>Search Cards</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList cards={filteredCards} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
