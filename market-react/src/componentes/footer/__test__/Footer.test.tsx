import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {

  beforeEach(() => {
    render(<Footer />);
  });
  
  test('should render social media icons', () => {
    
    const facebookIcon = screen.getByAltText('Facebook Icon');
    const instagramIcon = screen.getByAltText('Instagram Icon');
    const youtubeIcon = screen.getByAltText('YouTube Icon');

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
  });

  test('should render footer text', () => {
    expect(
      screen.getByText('No olvides seguirnos en redes')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Copyright © Todos los derechos reservados')
    ).toBeInTheDocument();
  });

  test('should render footer menu links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);

    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveTextContent('Terms');
    expect(links[2]).toHaveTextContent('Privacy');
    expect(links[3]).toHaveTextContent('Policy');
    expect(links[4]).toHaveTextContent('Contact');
  });
});
