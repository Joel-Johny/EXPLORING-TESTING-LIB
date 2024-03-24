import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'; 
import { Button } from './Button';

describe('Button Component', () => {
  it('should render the button with the correct title', () => {
    const buttonTitle = 'Click Me';
    const { getByText } = render(<Button title={buttonTitle} />);

    expect(getByText(buttonTitle)).toBeTruthy();
  });

  it('should call the onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<Button title="Test Button" onPress={mockOnPress} />);

    fireEvent.press(getByTestId('pressed'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should apply the correct styles', () => {
    const { getByTestId } = render(<Button title="Test Button" />);
    const button = getByTestId('pressed');

    expect(button).toHaveStyle({
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5 
    });
  });
});
