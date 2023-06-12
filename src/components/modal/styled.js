import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Closed = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2vh 1.5vw;
    cursor: pointer;
    font-size: 40px;
    transform: rotate(45deg);
    color: black;
    transition-duration: 1.2s;
    transition-timing-function: easy-in;
    &:hover {
        transform: rotate(135deg);
        color: white;
    }
`

export const ModalTable = styled.div`
    width: 90vw;
    height: 88vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    border-radius: 5px;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
`

export const ImgWrap = styled.div`
    width: 32.7vw;
    height: 84vh;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
    background: white;
    position: relative;
    border: 1px solid black;
    border-left: 0.4vw solid black;
    border-right: 0.4vw solid black;
    ${props => props.back && `
        background: black;
    `}
`

export const WindowForImg = styled.div`
    width: 32vw;
    height: ${props => props.h || '40vw'};
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid black;
`

export const ModalImg = styled.img`
    width: 32vw;
    height: auto;
`

export const Description = styled.div`
    width: 45vw;
    height: 84vh;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
`

export const Text = styled.textarea`
    height: 48vh;
    width: 36vw;
    padding: 1vw;
    vertical-align: top;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 14px;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
    text-wrap: wrap;
`

export const Tags = styled.textarea`
    height: 28vh;
    width: 36vw;
    padding: 1vw;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 14px;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
    text-wrap: wrap;
`