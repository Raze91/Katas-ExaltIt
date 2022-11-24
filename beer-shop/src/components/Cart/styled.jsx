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
`;

export const CartItemImage = styled.div`
    width: 10em;
    height: 12em;
    text-align: center;
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
    }
`;

export const CartItemManagement = styled.div`
    display: flex;
    gap: 2em;
`;
