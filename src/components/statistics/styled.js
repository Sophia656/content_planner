import styled from 'styled-components';

export const Wrapper = styled.div`
    z-index: 200;
    position: fixed;
    overflow: scroll;
    margin-left: 70vw;
    width: 26vw;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 0.3vw;
    padding: 0.4vw;
    height: 72vh;
    margin-top: 3.5vh;
    top: 0;
    padding: 0.4vw;
    border: 4px solid rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    background: white;
    transition-duration: 1s;
    transition-timing-function: easy-out;
    box-shadow: 1px 1px 15px 10px rgba(0, 0, 0, 0.2);
    ${props => props.hidden && `
        height: 1vh;
        background: grey;
    `}
`

export const Cell = styled.div`
    width: 3.8vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px solid black;
    background: ${props => props.back || ''};
    transition-duration: 0.6s;
    transition-timing-function: easy-in;
    opacity: 1;
    font-size: 1rem;
    text-align: center;
    ${props => props.hidden && `
        opacity: 0;
    `}
`