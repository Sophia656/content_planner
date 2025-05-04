import React from 'react';
import { Cell, CellImg, Wrapper } from './styled';

const Referencer = ({show}) => {

    return (
        <Wrapper hidden={!show}>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/10.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/3.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/16.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/18.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/19.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/20.jpg')} />
            </Cell>
        </Wrapper>
    );
};

export default Referencer;