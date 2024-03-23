import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button'; 

describe('Button', () => {
  it('renders with the correct title', () => {
    const title = 'Test Button';
    const { getByText } = render(<Button title={title} />);

    expect(getByText(title)).toBeDefined();
  });
});
