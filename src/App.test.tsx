import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

describe('App', () => {
  it('renders headline', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    // check if App components renders headline
    expect(screen.findByText('Vite + React')).toBeTruthy();
  });
});