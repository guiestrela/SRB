import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../../src/assets/components/Footer';

describe('Footer Component', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<Footer />);
    
    const logo = screen.getByText(/Background.*Remover/i);
    expect(logo).toBeInTheDocument();
  });

  it('deve conter links para redes sociais', () => {
    render(<Footer />);
    
    const githubLink = screen.getByAltText('github');
    const linkedinLink = screen.getByAltText('linkedin');
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it('deve ter links corretos para GitHub e LinkedIn', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    const githubLink = links.find(link => link.getAttribute('href')?.includes('github.com'));
    const linkedinLink = links.find(link => link.getAttribute('href')?.includes('linkedin.com'));
    
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com/guiestrela'));
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  it('deve destacar "Remover" em cor especial', () => {
    render(<Footer />);
    
    const destaque = screen.getByText('Remover');
    const span = destaque.closest('span');
    
    expect(span).toHaveStyle('color: rgb(113, 111, 250)');
  });
});
