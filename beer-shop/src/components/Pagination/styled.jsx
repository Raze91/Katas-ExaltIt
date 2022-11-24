import styled from "styled-components";

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
