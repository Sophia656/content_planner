import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: rga(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Closed = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2vw;
    cursor: pointer;
    font-size: 40px;
`

export const ModalTable = styled.div`
    width: 40vw;
    height: 60vh;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    border-radius: 5px;
`

export const Description = styled.input`
    width: inherit;
    height: 30vh;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 16px;
`