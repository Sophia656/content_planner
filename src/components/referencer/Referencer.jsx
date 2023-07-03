import React from 'react';
import { Cell, CellImg, Wrapper } from './styled';

const Referencer = ({show}) => {

    return (
        <Wrapper hidden={!show}>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/3.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/2.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/4.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/5.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/7.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/6.jpg')} />
            </Cell>
            
        </Wrapper>
    );
};

export default Referencer;