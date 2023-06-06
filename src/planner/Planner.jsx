import React, { useState } from 'react';
import { Btn, Cell, CellImg, PlannerWrap, Wrapper } from './styled';
import img1 from '../img/2.jpg';

const Planner = () => {
    const [changeBack, setChangeBack] = useState(false)

    const handleChangeBack = () => {
        setChangeBack(!changeBack)
    }
    return (
        <Wrapper back={changeBack}>
            <Btn btnback={changeBack} onClick={() => handleChangeBack()}>change back</Btn>
            <PlannerWrap>
                <Cell> <CellImg src={require('../img/4.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/5.jpg')} /></Cell>
                <Cell><CellImg w='auto' h='inherit' src={require('../img/3.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/6.jpg')} /></Cell>
                {/* <Cell><CellImg src={require('../img/18.jpg')} /></Cell> */}
                <Cell><CellImg w='auto' h='inherit'  src={require('../img/7.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/8.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/9.jpg')} /></Cell>
                <Cell><CellImg w='auto' h='inherit' src={require('../img/10.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/11.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/12.jpg')} /></Cell>
                <Cell><CellImg w='auto' h='inherit' src={require('../img/13.jpg')} /></Cell>
                <Cell><CellImg w='auto' h='inherit' src={require('../img/14.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/15.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/16.jpg')} /></Cell>
                <Cell><CellImg src={require('../img/17.jpg')} /></Cell>
            </PlannerWrap>
        </Wrapper>
    );
};

export default Planner;