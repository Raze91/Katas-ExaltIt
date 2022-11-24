import styled from "styled-components";

export const PaginationCtnr = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5em;

    button {
        all: unset;
        transition: all ease-in-out 0.2s;
        color: #00000090;

        :hover,
        :focus {
            color: #000000;
            cursor: pointer;
        }

        :disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    }
`;
