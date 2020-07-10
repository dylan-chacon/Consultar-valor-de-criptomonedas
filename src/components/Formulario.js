import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'

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

const Formulario = () => {
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra esterlina'},
        { codigo: 'COP', nombre: 'Peso Colombiano'}
    ];
    //useMoneda
    const [state, Seleccionar] = useMoneda('Elige tu moneda', '', MONEDAS);
    return (
        <form>
            <Seleccionar/>
            <Boton
                type="submit"
                value="calcular"
            >Calcular</Boton>
        </form>
    );
}

export default Formulario;