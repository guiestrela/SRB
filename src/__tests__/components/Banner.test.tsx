import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from '../../../src/assets/components/Banner';

describe('Banner Component', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<Banner />);
    
    const element = screen.getByText(/Rapido, facil/i);
    expect(element).toBeInTheDocument();
  });

  it('deve conter texto sobre removedor de background', () => {
    render(<Banner />);
    
    const texto = screen.getByText(/Removedor.*Background.*Imagens/i);
    expect(texto).toBeInTheDocument();
  });

  it('deve ter texto em português sobre facilidade', () => {
    render(<Banner />);
    
    const descricao = screen.getByText(/Precisa remover o fundo/i);
    expect(descricao).toBeInTheDocument();
  });

  it('deve destacar "Removedor" em cor especial', () => {
    render(<Banner />);
    
    const destaque = screen.getByText('Removedor');
    const span = destaque.closest('span');
    
    expect(span).toHaveStyle('color: rgb(113, 111, 250)');
  });
});
