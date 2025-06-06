import styled from 'styled-components';

export const PlannerWrap = styled.div`
    position: fixed;
    width: 32vw;
    height: 92vh;
    border-radius: 35px;
    background: white;
    top: 1%;
    left: 34.75%;
    border: 10px solid black;
    transition-duration: 1.2s;
    transition-timing-function: easy-in;
    box-shadow: 2px 2px 20px 7px rgba(0, 0, 0, 0.2);
    ${props => props.back && `
        background: black;
        box-shadow: 2px 2px 20px 7px rgba(255, 255, 255, 0.3);
    `}
    overflow: scroll;
`

export const GridWrap = styled.div`
    overflow: scroll;
    min-height: 79.5vh;
    max-height: 79.5vh;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${props => props.gr || 'repeat(10, 1fr)'};
    gap: 1px;
    padding: 0.5vw 0vw 0.5vw 0.08vw;
    margin-top: 5vh;
`

export const Cell = styled.div`
    width: 10.1vw;
    height: 12.9vw;
    background: ${props => props.img || 'lightgrey'};
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

export const CellImg = styled.img`
    width: ${props => props.w || 'inherit'};
    height: ${props => props.h || 'auto'};
`

export const CellEngagement = styled.div`
    position: absolute;
    top: 50;
    letf: 50;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 3.5vh;
    width: 7vw;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.6);
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
    right: 30.6%;
    cursor: pointer;
`

export const BtnsWrap = styled.div`
    position: fixed;
    width: 32vw;
    height: 8vh;
    top: 93%;
    left: 34.75%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ShowCurrentStatisticsBtn = styled.div`
    text-align: center;
    font-size: 0.8rem;
    padding: 0.5vw;
    display: flex;
    line-height: 1.5vh;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 6vw;
    height: 4vh;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    transition-duration: 1.15s;
    transition-timing-function: easy-in;
    -webkit-box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    -moz-box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`

export const ShowStatisticsBtn = styled.div`
    text-align: center;
    font-size: 0.8rem;
    padding: 0.5vw;
    display: flex;
    line-height: 1.5vh;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 6vw;
    height: 4vh;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    transition-duration: 1.15s;
    transition-timing-function: easy-in;
    -webkit-box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    -moz-box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    box-shadow: 0 0 50px 3px rgba(0, 0, 0, 0.4) inset;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`