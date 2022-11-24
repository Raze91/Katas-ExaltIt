import React from "react";
import { CardsCtnr, Main } from "./styled";
import Card from "../Card/Card";
import { getBeers } from "../../services/api/Beers";
import Pagination from "../Pagination/Pagination";

const HomeContent = ({ beers, cart, page, page_limit, send }) => {
    const changePage = (newPage) => {
        getBeers(newPage, page_limit).then((response) => {
            send("CHANGE_PAGE", { value: newPage, beers: response });
        });
    };

    return (
        <Main>
            <h1>Welcome to BeerShop !</h1>

            <Pagination
                changePage={changePage}
                beers={beers}
                page={page}
                page_limit={page_limit}
            />

            <CardsCtnr>
                {beers?.map((beer, key) => (
                    <Card key={key} item={beer} cart={cart} send={send} />
                ))}
            </CardsCtnr>

            <Pagination
                changePage={changePage}
                beers={beers}
                page={page}
                page_limit={page_limit}
            />
        </Main>
    );
};

export default HomeContent;
