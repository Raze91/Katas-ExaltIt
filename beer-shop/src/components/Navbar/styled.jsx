import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    padding: 0 2em;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: white;
    border-bottom: 1px solid #00000010;
    height: 68px;

    button {
        all: unset;

        :hover {
            cursor: pointer;
        }
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;

        li {
            button {
                display: flex;
                align-items: center;
                gap: 5px;
                color: #00000090;
                opacity: 0.5;
                text-decoration: none;
                position: relative;

                :hover {
                    opacity: 1;
                }

                svg {
                    fill: #000000;
                    width: 0.8rem;
                }
            }
            button.active {
                opacity: 1;
            }
        }
    }
`;

export const CartPin = styled.div`
    position: absolute;
    top: -0.4rem;
    left: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    color: #ffffff;
    font-size: 0.8rem;
    background-color: ${props => props.empty ? 'red' : 'green'};
`;
