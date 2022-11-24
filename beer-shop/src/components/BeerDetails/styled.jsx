import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 654px) {
        flex-direction: column;
    }
`;

export const ImgCtnr = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: calc(100vh - 68px);
    background-color: #00000010;

    img {
        height: 66%;
    }
`;

export const DetailsContent = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
    height: calc(100vh - 68px);
    padding: 1.5rem;

    .tagline {
        font-style: italic;
    }

    span {
        color: #00000060;
    }

    strong {
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
        }
    }

    @media (max-width: 654px) {
        overflow-y: auto;
        height: auto;
    }
`;

export const ContentHeader = styled.div`
    h1 {
        font-size: 3rem;
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0;
    }
`;

export const ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;

    p {
        margin: 0;
        padding: 0;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        background-color: #00000090;
        color: #ffffff;
        font-size: 1rem;
        text-decoration: none;
        border-radius: 0.2rem;
        cursor: pointer;
        width: fit-content;
        padding: 0.8rem;
        border: none;

        :hover,
        :focus {
            background-color: #000000;
            color: #ffffff;
        }
    }
`;
