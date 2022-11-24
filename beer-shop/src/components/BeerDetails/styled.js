import styled from "styled-components";

export const Main = styled.main`
    padding: 2em 3em;
    display: flex;
`;

export const ImgCtnr = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    height: 30em;

    img {
        height: 100%;
    }
`;

export const DetailsContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    .tagline {
        font-style: italic;
    }
`;

export const ContentHeader = styled.div`
    text-align: center;

    p {
        margin: 1em;
    }
`;
