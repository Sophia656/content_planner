import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    ${props => props.back && `
        background: black;
    `}
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Btn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2vw;
    width: 7vw;
    height: 5vh;
    background: black;
    color: white;
    ${props => props.btnback && `
        background: white;
        color: black;
    `}
`

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