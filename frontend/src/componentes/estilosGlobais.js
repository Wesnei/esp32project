import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #ffffff; 
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: #0B4C5F;
    color: white;
    border: 3px solid #0B4C5F;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0A3445; /* Tom mais escuro para destacar no hover */
      border-color: #0A3445;
    }
  }

  h3 {
    color: #0B4C5F; /* Verde-azul escuro para destaque */
    font-size: 2rem; /* Tamanho maior para destaque */
    margin-bottom: 1rem;
  }

  p {
    padding: 3rem 0rem;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.6;
  }

  label {
    color: #0B4C5F; /* Verde-azul escuro para destaque */
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  /* Estilo para banner de destaque */
  .hero-banner {
    background-image: url('caminho/para/imagem.jpg');
    background-size: cover;
    background-position: center;
    height: 400px; /* Ajuste conforme necessário */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 2rem;
  }

  /* Estilo para caixa de informações */
  .info-box {
    background: #FFFFFF; /* Fundo branco */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Sutil sombra */
    margin: 2rem 0;
  }

  /* Estilo para depoimentos */
  .testimonial {
    background: #F0F9F9; /* Fundo verde-água claro */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
  }

  /* Estilo para o rodapé */
  footer {
    background: #0B4C5F; /* Verde-azul escuro */
    padding: 2rem 0;
    color: white;
    text-align: center;
  }
`;

export default EstilosGlobais;
