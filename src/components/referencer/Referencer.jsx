import React from 'react';
import { Cell, CellImg, Wrapper } from './styled';

const Referencer = ({changeBack}) => {

    return (
        <Wrapper change={changeBack}>
            <Cell>
                <CellImg src={require('../../img/ref/3.jpg')} />
            </Cell>
            <Cell>
                <CellImg src={require('../../img/ref/2.jpg')} />
            </Cell>
        </Wrapper>
    );
};

export default Referencer;