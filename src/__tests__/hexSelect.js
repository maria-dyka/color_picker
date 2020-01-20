import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HextSelect from '../components/HexSelect';

it('renders toggle button', () => {
    const { getByTestId } = render(<HextSelect/>);
    expect(getByTestId('toggle-button')).toBeInTheDocument();
});

it('toggles dropdown menu', () => {
    const colors = ['#FF0000', '#BDFF00', '#4200FF', '#FFD800'];
    const { getByTestId } = render(<HextSelect colors={colors}/>);
    fireEvent.click(getByTestId('toggle-button'));
    expect(getByTestId('dropdown')).toBeInTheDocument();
});