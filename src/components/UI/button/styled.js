import styled from 'styled-components';

export const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: ${props => props.r || '48%'};
    padding-top: 2px;
    margin-bottom: 1.6vh;
    width: 2.2vw;
    height: 2.2vw;
    background: black;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    font-size: 26px;
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.9);
    transition-duration: 1s;
    transition-timing-function: easy-in;
    ${props => props.btnback && `
        background: white;
        color: black;
        box-shadow: 0px 0px 5px 4px rgba(255, 255, 255, 0.9);
    `}
`