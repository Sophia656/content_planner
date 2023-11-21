import styled from 'styled-components';

export const Wrapper = styled.div`
    z-index: 300;
    overflow: scroll;
    min-height: 87vh;
    max-height: 87vh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 0.3vw;
    padding: 0.4vw;
    width: 20.5vw;
    border: 4px solid rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    margin-right: 1vw;
    margin-top: 3vh;
    background: white;
    transition-duration: 1.2s;
    transition-timing-function: easy-out;
    box-shadow: 1px 1px 15px 10px rgba(0, 0, 0, 0.2);
    ${props => props.hidden && `
        width: 1vw;
        background: grey;
    `}
`

export const Cell = styled.div`
    width: 19vw;
    height: 44.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 1vh 0;
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