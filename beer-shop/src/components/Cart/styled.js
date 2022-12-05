import styled from "styled-components";

export const Main = styled.main`
    padding: 1em 2em;
`;

export const CartBlock = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1em;

    hr {
        width: 100%;
        border-top: 1px solid lightgray;
    }

    h2,
    p {
        margin: 0;
    }

    .link {
        all: unset;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }
`;

export const CartItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const CartItem = styled.div`
    display: flex;
    gap: 2em;
    padding: 1em;

    @media (max-width: 600px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const CartItemImage = styled.div`
    width: 10em;
    height: 12em;
    text-align: center;
    cursor: pointer;
    img {
        height: 100%;
    }
`;

export const CartItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        margin: 0;
        cursor: pointer;

        :hover,
        :focus {
            text-decoration: underline;
        }
    }

    @media (max-width: 600px) {
        align-items: center;
        gap: 1rem;
    }
`;

export const CartItemManagement = styled.div`
    display: flex;
    gap: 2rem;

    select {
        font-size: 1rem;
        padding: 0.8rem;
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

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;
