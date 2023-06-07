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
    justify-content: space-between;
    position: relative;
    padding-bottom: 1vh;
`