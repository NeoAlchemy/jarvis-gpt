import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArcReactor from './ArcReactor';

describe('<ArcReactor />', () => {
  test('it should mount', () => {
    render(<ArcReactor />);
    
    const arcReactor = screen.getByTestId('ArcReactor');

    expect(arcReactor).toBeInTheDocument();
  });
});