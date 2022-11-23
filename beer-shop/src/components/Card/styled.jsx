import styled from "styled-components";

export const CardCtnr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    width: 15em;
    border: 1px solid black;
    border-radius: 6px;

    :hover {
        box-shadow: 0px 0px 15px 2px black;
        transition: 300ms;
    }
`;

export const CardImgCtnr = styled.div`
    height: 15em;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 1em 0;
    gap: 1em;

    h2, p {
        margin: 0;
    }

    p {
        font-style: italic;
    }
`;
