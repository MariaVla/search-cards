import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
// searchCards is the name of the reducer
const mapStateToProps = (state) => {
  return {
    searchField: state.searchCards?.searchField,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  componentDidMount() {
    // this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;

    const filteredRobots = robots?.filter((robot) => {
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
              <CardList cards={filteredRobots} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
