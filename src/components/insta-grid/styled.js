import styled from 'styled-components';

export const PlannerWrap = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.1vw;
    padding: 3vw 3.4vw;
    width: 37vw;
    height: 98vh;
    border-radius: 5px;
    // margin-left: -6vw;
    background: white;
    // position: relative;
    top: 0.5%;
    left: 31.7%;
    border: 1px solid black;
    transition-duration: 1.2s;
    transition-timing-function: easy-in;
    ${props => props.back && `
        background: black;
        border: 1px solid white;
    `}
`

export const Cell = styled.div`
    width: 10vw;
    height: 10vw;
    background: ${props => props.img || 'lightgrey'};
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const CellImg = styled.img`
    width: ${props => props.w || 'inherit'};
    height: ${props => props.h || 'auto'};
`

export const Btn = styled.button`
    position: absolute;
    bottom: 0;
    right: 48%;
    margin: 0.2vw;
    width: 2.8vw;
    height: 2.8vw;
    background: black;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    font-size: 26px;
    transition-duration: 1s;
    transition-timing-function: easy-in;
    ${props => props.btnback && `
        background: white;
        color: black;
    `}
`