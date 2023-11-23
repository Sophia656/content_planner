import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    opacity: 1;
    margin-left: 4vw;
    height: 70vh;
    width: 27.7vw;
    display: flex;
    flex-direction: column;
    margin-top: 13.5vh;
    top: 0;
    padding: 0.6vw;
    padding-top: 3vh;
    transition-duration: 1.2s;
    transition-timing-function: easy-out;
    ${props => props.hidden && `
        opacity: 0;
    `}
`

export const Desc = styled.div`
    position: absolute;
    opacity: 1;
    top: 0;
    letf: 0;
    text-align: center;
    font-size: 1rem;
    width: inherit;
    font-weight: bold;
    ${props => props.hidden && `
        opacity: 0;
    `}
    span {
        font-size: 0.9rem;
        font-weight: 200;
    }
`

export const DescItemsWrap = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justifu-content: center;
    height: 20vh;
    margin-top: 5vh;
    opacity: 1;
    transition-duration: 0.6s;
    transition-timing-function: easy-in;
    ${props => props.hidden && `
        opacity: 0;
    `}
    &:last-child {
        font-weight: 200;
        font-size: 0.8rem;
    }
`

export const DescItem = styled.div`
    transition-duration: 0.6s;
    transition-timing-function: easy-in;
    opacity: 1;
    font-size: 1rem;
    font-weight: bold;
    ${props => props.hidden && `
        opacity: 0;
    `}
    span {
        font-size: 0.9rem;
        font-weight: 200;
    }
`

export const Cell = styled.div`
    width: 4.3vw;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px solid black;
    background: lightgrey;
    transition-duration: 0.6s;
    transition-timing-function: easy-in;
    opacity: 1;
    font-size: 0.8rem;
    text-align: center;
    ${props => props.hidden && `
        opacity: 0;
    `}
`
export const MyCurcle = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justifu-content: center;
    margin-top: 6vh;
    margin-left: 7vh;
`