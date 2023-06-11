import styled from 'styled-components';

export const PlannerWrap = styled.div`
    position: fixed;
    width: 31vw;
    height: 92vh;
    border-radius: 35px;
    background: white;
    top: 1%;
    left: 35%;
    border: 1px solid black;
    transition-duration: 1.2s;
    transition-timing-function: easy-in;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
    ${props => props.back && `
        background: black;
        border: 1px solid white;
        box-shadow: 2px 2px 20px 7px rgba(255, 255, 255, 0.3);
    `}
    overflow: scroll;
`

export const GridWrap = styled.div`
    overflow: scroll;
    min-height: 81.5vh;
    max-height: 81.5vh;
    width: inherit;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${props => props.gr || 'repeat(8, 1fr)'};
    gap: 0.1vw;
    padding: 0.5vw 1.9vw 0vw 1.8vw;
    margin-top: 5vh;
`

export const Cell = styled.div`
    width: 9vw;
    height: 9vw;
    background: ${props => props.img || 'lightgrey'};
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const CellImg = styled.img`
    width: ${props => props.w || 'inherit'};
    height: ${props => props.h || 'auto'};
`

export const Btn = styled.button`
    position: absolute;
    bottom: 0;
    right: 48%;
    padding-top: 2px;
    margin-bottom: 2vh;
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

export const Plus = styled.div`
    position: absolute;
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    color: white;
`

export const Line = styled.div`
position: fixed;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(8, 1fr);
gap: 0.1vw;
padding: 3.2vw 1.9vw 3.2vw 1.8vw;
width: 31vw;
height: 92vh;
border-radius: 35px;
background: transparent;
top: 1%;
left: 34.5%;
border-left: 25px solid black;
border-right: 25px solid black;
border-bottom: 53px solid black;
border-top: 1px solid black;
box-shadow: 1px 10px 1px 1px rgba(0, 0, 0) inset;

    // position: absolute;
    // top: 1.2%;
    // bottom: 0;
    // right: 34.65%;
    // width: 1.6vw;
    // height: 91.5vh;
    // background: black;
    // border-radius: 0 55px 55px 0;
    z-index: 300;
    // &:nth-child(2) {
    //     right: 63.7%;
    //     border-radius: 55px 0 0 55px;
    // }
`

export const BtnsForShiftBack = styled.div`
    width: 2vw;
    height: 5vh;
    font-size: 60px;
    position: absolute;
    z-index: 300;
    top: 48.5%;
    left: 32%;
    cursor: pointer;

`
export const BtnsForShiftForward = styled.div`
    width: 2vw;
    height: 5vh;
    font-size: 60px;
    position: absolute;
    z-index: 300;
    top: 48.5%;
    right: 31.4%;
    cursor: pointer;
`