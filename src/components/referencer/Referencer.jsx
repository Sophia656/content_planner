import React from 'react';
import { Cell, CellImg, Wrapper } from './styled';

const Referencer = ({show}) => {

    return (
        <Wrapper hidden={!show}>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/8.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/2.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/3.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/16.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/10.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/11.jpg')} />
            </Cell>
            <Cell  hidden={!show}>
                <CellImg closeW={!show} openW={show} src={require('../../img/ref/12.jpg')} />
            </Cell>
        </Wrapper>
    );
};

export default Referencer;