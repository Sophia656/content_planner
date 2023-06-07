import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.1vw;
    padding: 0.4vw;
    width: 21vw;
    height: 92vh;
    border: 4px solid black;
    border-radius: 5px;
    margin-left: 1vw;
    ${props => props.change && `
        border: 4px solid white;
    `}
`

export const Cell = styled.div`
    width: 9.7vw;
    height: 22vh;
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