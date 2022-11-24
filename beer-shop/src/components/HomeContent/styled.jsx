import styled from "styled-components";

export const Main = styled.main`
    text-align: center;
    padding: 2em 0;

    h1 {
        margin: 0;
    }
`;

export const CardsCtnr = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
    padding: 1em 0 2em 0;
`;

export const PaginationCtnr = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5em;

    button {
        all: unset;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }
`;
