import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    scroll: disabled;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-bottom: 1vh;
    -webkit-box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    -moz-box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
`

export const RightCloser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    width: 1.2vw;
    height: 4vh;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top 48%;
    z-index: 200;
    transition-duration: 1.15s;
    transition-timing-function: easy-in;
    border: 2px solid black;
    border-right: none;
    border-radius: 5px 0px 0px 5px;
    left: 77.6%;
    ${props => props.click && `
        left: 96.7%;
    `}
    
`

export const LeftCloser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    width: 1.2vw;
    height: 4vh;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid black;
    border-left: none;
    position: absolute;
    border-radius: 0 5px 5px 0;
    left: 26.7%;
    top 48%;
    z-index: 200;
    ${props => props.close && `
        transition-duration: 1.15s;
        transition-timing-function: easy-in;
        left: 2.1%;
    `}
    ${props => props.open && `
        transition-duration: 1.2s;
        transition-timing-function: easy-in;
        left: 26.7%;
    `}
`