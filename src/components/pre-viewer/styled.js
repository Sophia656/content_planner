import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    opacity: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.1vw;
    padding: 4vh 0.4vw;
    width: 26vw;
    height: 86vh;
    border: 4px solid rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    margin-left: 1vw;
    background: white;
    transition-duration: 1.2s;
    transition-timing-function: easy-in;
    box-shadow: 10px 1px 15px 1px rgba(0, 0, 0, 0.2);
    ${props => props.hidden && `
        width: 1vw;
    `}
    ${props => props.changeBack && `
        background: black;
        border: 4px solid rgba(255, 255, 255, 0.7);
    `}
`

export const Menu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 26vw;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 200;
    margin-top: 1vh;
    margin-left: 1vw;
    opacity: 1;
    transition-duration: 1.2s;
    transition-timing-function: easy-in-out;
    ${props => props.hidden && `
        width: 0vw;
        opacity: 0;
    `}
`

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background: white;
    font-size: 12px;
    text-align: center;
    width: 6vw;
    height: 3vh;
    border: 2px solid black;
    margin: 0.1vw;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.6s;
    transition-timing-function: easy-in;
    ${props => props.hover && `
        transition-duration: 0s;
        background: rgba(255, 255, 255, 0.1);
    `}
    ${props => props.active && `
        color: white;
        background: black;
    `}
    opacity: 1;
    ${props => props.closeWindow && `
        transition-duration: 1.1s;
        transition-timing-function: easy-in;
        opacity: 0;
        font-size: 0;
        // text-indent: -9999px;
        width: 0;
    `}
    ${props => props.openWindow && `
        transition-duration: 1.3s;
        transition-timing-function: easy-in-out;
        opacity: 1;
    `}
`

export const Cell = styled.div`
    width: 8vw;
    height: 18.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 0.1s;
        transition-timing-function: easy-in;
    border: ${props => props.border || 'none'};
    opacity: 1;
    cursor: grab;
    position: relative;
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
    // ${props => props.changeBack && `
    //     border: 1px solid white;
    // `}
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

export const DragAndDrop = styled.div`
    display; flex;
    align-items: center;
    justify-content: center;
    width: 6vw;
    height: 15vh;
    text-align: center;
    position: absolute;
    color: black;
    ${props => props.changeBack && `
        color: white;
    `}
`