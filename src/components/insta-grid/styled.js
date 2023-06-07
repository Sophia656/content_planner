import styled from 'styled-components';

export const PlannerWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.1vw;
    padding: 0.5vw;
`

export const Cell = styled.div`
    width: 10vw;
    height: 10vw;
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
    right: 46.8%;
    margin: 0.2vw;
    width: 6vw;
    height: 4vh;
    background: black;
    color: white;
    border-radius: 5px;
    margin-bottom: 1vh;
    font-size: 26px;
    ${props => props.btnback && `
        background: white;
        color: black;
    `}
`