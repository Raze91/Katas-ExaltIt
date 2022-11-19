import styled from "styled-components";

export const Wrapper = styled.section`
    width: 95vw;
    height: 100vh;
    margin: 1rem 3.3rem;
`;

export const Row = styled.div`
    height: 10%;
    width: 100%;
    border-top: 1px solid black;
    position: relative;
    display: flex;
    gap: 5px;
`;

export const RowHour = styled.p`
    margin: 0;
    position: absolute;
    left: -2.9rem;
    top: -0.7rem;
`;

export const Event = styled.div`
    display: flex;
    flex: 1;
    background-color: #039BE5;
    color: white;
    border-radius: 5px;
    padding: 10px;
    z-index: 1;

    height: calc(${props => props.duration}px);
    margin-top: ${props => props.startMinutes}px;
`;
