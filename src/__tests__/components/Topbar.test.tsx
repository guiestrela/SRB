import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopBar from '../../../src/assets/components/Topbar';

describe('TopBar Component', () => {
  it('deve renderizar o componente sem erros', () => {
    render(<TopBar />);
    
    const elemento = screen.getByText(/Background/i);
    expect(elemento).toBeInTheDocument();
  });

  it('deve conter botões de Login e Sign-Up', () => {
    render(<TopBar />);
    
    const loginBtn = screen.getByText('Login');
    const signupBtn = screen.getByText('Sign-Up');
    
    expect(loginBtn).toBeInTheDocument();
    expect(signupBtn).toBeInTheDocument();
  });

  it('deve exibir logo "Background Remover"', () => {
    render(<TopBar />);
    
    const logo = screen.getByText(/Background.*Remover/i);
    expect(logo).toBeInTheDocument();
  });

  it('deve destacar "Remover" em cor especial', () => {
    render(<TopBar />);
    
    const destaque = screen.getByText('Remover');
    const span = destaque.closest('span');
    
    expect(span).toHaveStyle('color: rgb(113, 111, 250)');
  });
});
