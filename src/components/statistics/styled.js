import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    overflow: scroll;
    opacity: 1;
    margin-left: 70vw;
    height: 70vh;
    width: 27.7vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 13.5vh;
    top: 0;
    padding: 0.4vw;
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
        text-align: left;
        font-weight: 200;
    }
`

export const DataItemWrap = styled.div`
    width: 25vw;
    color: black;
`