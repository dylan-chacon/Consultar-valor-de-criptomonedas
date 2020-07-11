import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Parrafo =styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return (
        <Contenedor>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Última actualización: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </Contenedor>
    );
}
 
export default Cotizacion;