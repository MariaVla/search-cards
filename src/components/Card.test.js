// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import Card from './Card';

/**
 * render: lets us render the component (like how React would)
 * screen: Your utility for finding elements the same way the user does
 **/
import { render, screen } from '@testing-library/react';

test('has correct welcome text', () => {
  render(<Card name='John Doe' email='johndoe@gmail.com' id='1' />);
  expect(screen.getByRole('heading')).toHaveTextContent('John Doe');
});

test('expect to render Card component', () => {
  render(<Card />);
  expect(screen).toMatchSnapshot();
});
