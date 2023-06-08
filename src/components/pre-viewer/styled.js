import styled from 'styled-components';

export const Wrapper = styled.div`
    opacity: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.1vw;
    padding: 0.4vw;
    width: 26vw;
    height: 97vh;
    border: 4px solid rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    margin-left: 1vw;
    background: black;
    transition-duration: 1.2s;
    transition-timing-function: easy-in;
    ${props => props.hidden && `
        width: 1vw;
    `}
`

export const Cell = styled.div`
    width: 8vw;
    height: 18.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid black;
    background: lightgrey;
    opacity: 1;
    cursor: grab;
    ${props => props.closeWindow && `
        transition-duration: 0.4s;
        transition-timing-function: easy-in;
        opacity: 0;
    `}
    ${props => props.openWindow && `
        transition-delay: 0.7s;
        transition-duration: 1.3s;
        transition-timing-function: easy-out;
        opacity: 1;
    `}
`

export const CellImg = styled.img`
    width: ${props => props.w || 'inherit'};
    height: ${props => props.h || 'auto'};
    opacity: 1;
    ${props => props.closeWindow && `
        transition-duration: 0.5s;
        transition-timing-function: easy-in;
        opacity: 0;
    `}
    ${props => props.openWindow && `
        transition-delay: 1s;
        transition-duration: 1.8s;
        transition-timing-function: easy-in;
        opacity: 1;
    `}
`