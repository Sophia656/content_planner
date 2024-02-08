import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
`

export const CloseBtn = styled.button`
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;
    margin: 3vw;
    border: 2px solid black;
    border-radius: 2vw;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    width: 1.8vw;
    height: 3.2vh;
    transition-duration: 0.5s;
    transition-timing-function: easy-in;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`

export const ImageItem = styled.img`
    width: auto;
    height: 80vh;
`