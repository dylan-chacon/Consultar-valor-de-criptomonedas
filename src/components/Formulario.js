import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';

const Boton = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    width: 100%;
    border: 2px solid gray;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCripto}) => {
    //state
    const [criptos, guardarCriptos] = useState([]);
    const [error, guardarError] = useState(false);
    //listado de monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra esterlina'},
        { codigo: 'COP', nombre: 'Peso Colombiano'}
    ];
    //useMoneda
    const [moneda, Seleccionar] = useMoneda('Elige tu moneda', '', MONEDAS);
    //useCriptoMoneda
    const [criptoMoneda, SeleccionarCripto] = useCriptomoneda('Elige tu criptomoneda', '', criptos);
    //lamar api
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url)
            guardarCriptos(resultado.data.Data);
        }
        consultarAPI();
    }, [])
    //submit
    const cotizarmoneda = e => {
        e.preventDefault();
        //ambos campos llenos
        if (moneda === '' || criptoMoneda === '') {
            guardarError(true);
            return
        }
        guardarError(false);
        //pasando al componente principal
        guardarMoneda(moneda);
        guardarCripto(criptoMoneda);
    }
    return (
        <form
            onSubmit={cotizarmoneda}
        >
            { error ? <Error mensaje="Todos los campos son obligatorios" /> : null }
            <Seleccionar/>
            <SeleccionarCripto/>
            <Boton
                type="submit"
                value="calcular"
            >Calcular</Boton>
        </form>
    );
}

export default Formulario;