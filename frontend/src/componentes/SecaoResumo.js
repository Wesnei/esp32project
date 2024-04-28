import React from 'react';
import styled from 'styled-components';
import { FaThermometerHalf, FaTint, FaRegLightbulb, FaWifi, FaChartLine, FaCog } from 'react-icons/fa';

const Inicio = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: black;
`;

const Titulo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px; /* Aumentei o espaço entre os cards */
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const CardText = styled.div`
  font-size: 1.2rem;
`;

const SecaoResumo = () => {
  return (
    <Inicio>
      <Titulo>Recursos Principais</Titulo>
      <CardWrapper>
        <Card>
          <CardIcon><FaThermometerHalf /></CardIcon>
          <CardText>Controle de temperatura</CardText>
        </Card>
        <Card>
          <CardIcon><FaTint /></CardIcon>
          <CardText>Controle de umidade do solo</CardText>
        </Card>
        <Card>
          <CardIcon><FaRegLightbulb /></CardIcon>
          <CardText>Controle de iluminação</CardText>
        </Card>
        <Card>
          <CardIcon><FaWifi /></CardIcon>
          <CardText>Conectividade Wi-Fi</CardText>
        </Card>
        <Card>
          <CardIcon><FaChartLine /></CardIcon>
          <CardText>Monitoramento em tempo real</CardText>
        </Card>
        <Card>
          <CardIcon><FaCog /></CardIcon>
          <CardText>Configurações personalizadas</CardText>
        </Card>
      </CardWrapper>
    </Inicio>
  );
};

export default SecaoResumo;
