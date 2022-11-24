import styled from "styled-components";

export const CardCtnr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 3rem;
    border: none;
    border-radius: 1rem;
    background-color: #00000010;
    min-width: 248px;
    position: relative;

    :hover {
    }
`;

export const CardImgCtnr = styled.div`
    height: 248px;

    img {
        height: 100%;
    }
`;

export const CardContent = styled.div`
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: 66%;
    text-align: left;
    word-break: break-all;
    font-size: 1.5rem;
`;

export const CardButtonsCtnr = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
    position: absolute;
    top: 1rem;
    right: 1rem;

    button {
        display: flex;
        padding: 1em;
        align-self: center;
        width: fit-content;
        border-radius: 0.5rem;

        :hover {
            cursor: pointer;
        }

        svg {
            width: 1rem;
            height: 1rem;
        }
    }
`;
