import React from 'react';
import { MainNavigation } from './MainNavigation';
import { renderWithRouter } from '../testUtils';

describe('<MainNavigation/>', () => {
  it('has logo, site name and correct headings, icons and links', () => {
    const { getByText, getByAltText } = renderWithRouter(<MainNavigation />);
    expect(getByText('glūck')).toBeInTheDocument();
    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByText('All Gifts')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Add A Gift')).toBeInTheDocument();
    expect(getByText('My Exchanges')).toBeInTheDocument();
    expect(getByText('My Account')).toBeInTheDocument();
  });
});
