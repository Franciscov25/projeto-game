import React from 'react'
import { FooterContainer , FooterContext } from '../styles/FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
    <FooterContext>
    <div className='contato'>
      <h3>Contato</h3>
      <p>@2025 | Todos os direitos reservados</p>
      <p>Telefone: (11) 9235235-423</p>
    </div>

    <div className='direitos'>
      <p>&copy; 2025 - Chico Game | Todos os direitos reservados</p>
    </div>

    <div className='redes-sociais'>
      <h3>Redes Sociais</h3>
      <ul>
        <li><a href='#'>Facebook</a></li>
        <li><a href='#'>Instagram</a></li>
        <li><a href='#'>Twitter</a></li>
      </ul>

    </div>
    </FooterContext>
    </FooterContainer>
  )
}

export default Footer
