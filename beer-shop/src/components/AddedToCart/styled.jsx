import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsCtnr = styled.div`
    display: flex;
    padding: 3em 0;
    gap: 5em;

    button {
        padding: 1em 2em;

        :hover {
            cursor: pointer;
        }
    }
`;
