import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  //state
  const [moneda, guardarMoneda] = useState('');
  const [cripto, guardarCripto] = useState('');
  const [resultado, guardarResultado] = useState({});
  //effect cambios
  useEffect(() => {
    const cotizar = async () => {
      //evitar llamado automático
      if(moneda === '') return;
      //Consultar API para corización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      const resultado = await axios.get(url);
    }
    cotizar()
  }, [moneda, cripto])
  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>
          Cotiza criptomonedas al instante
        </Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCripto={guardarCripto}
        />
      </div>
    </Contenedor>
  );
}

export default App;
