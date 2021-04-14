// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import CardList from './CardList';

/**
 * render: lets us render the component (like how React would)
 * screen: Your utility for finding elements the same way the user does
 **/
import { render, screen } from '@testing-library/react';

test('expect to render Card component', () => {
  const mockCards = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    },
  ];
  render(<CardList cards={mockCards} />);
  expect(screen).toMatchSnapshot();
});
