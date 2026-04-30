import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextInfo from '../../../src/assets/components/TextInfo';

describe('TextInfo Component', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<TextInfo />);
    
    const texto = screen.getByText(/2025/i);
    expect(texto).toBeInTheDocument();
  });

  it('deve exibir ano atual e status de desenvolvimento', () => {
    render(<TextInfo />);
    
    const infoText = screen.getByText(/2025.*em desenvolvimento/i);
    expect(infoText).toBeInTheDocument();
  });

  it('deve ser centralizado', () => {
    const { container } = render(<TextInfo />);
    
    const divs = container.querySelectorAll('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
