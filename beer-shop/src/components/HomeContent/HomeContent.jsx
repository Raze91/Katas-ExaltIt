import React from "react";
import { CardsCtnr, Main } from "./styled";
import Card from "../Card/Card";

const HomeContent = ({beers, send}) => {
    return (
        <Main>
            <h1>Welcome to BeerShop !</h1>

            <CardsCtnr>
                {beers?.map((beer, key) => (
                    <Card key={key} item={beer} send={send} />
                ))}
            </CardsCtnr>
        </Main>
    );
};

export default HomeContent;