import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    padding: 0 5rem;
    justify-content: space-between;
    align-items: center;
    background-color: #0c0d08d8;
    color: white;

    ul {
        display: flex;
        gap: 3rem;
        list-style: none;

        li {
            a {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;

                color: white;
                opacity: 0.5;
                text-decoration: none;

                :hover {
                    opacity: 1;
                }

                svg {
                    fill: white;
                    width: 1.5rem;
                }
            }
            a.active {
                opacity: 1;
            }
        }
    }
`;