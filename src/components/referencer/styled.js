import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.3vw;
    padding: 0.4vw;
    width: 20.5vw;
    height: 92vh;
    border: 4px solid rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    margin-right: 1vw;
    background: black;
    transition-duration: 1.2s;
    transition-timing-function: easy-out;
    ${props => props.hidden && `
        width: 1vw;
    `}
`

export const Cell = styled.div`
    width: 19vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &:last-child {
        border-top: 3px solid grey;
        padding-top: 1vh;
    }
    transition-duration: 0.6s;
    transition-timing-function: easy-in;
    opacity: 1;
    ${props => props.hidden && `
        opacity: 0;
    `}
`

export const CellImg = styled.img`
    width: ${props => props.w || 'inherit'};
    height: ${props => props.h || 'auto'};
    opacity: 1;
    cursor: grab;
    &:hover {
        width: 50vw;
    }
    ${props => props.closeW && `
        transition-duration: 0.1s;
        transition-timing-function: easy-out;
        opacity: 0;
    `}
    ${props => props.openW && `
        transition-delay: 0.6s;
        transition-duration: 1.8s;
        transition-timing-function: easy-in;
        opacity: 1;
    `}
`