import React from "react";
import { CardsCtnr, Main, PaginationCtnr } from "./styled";
import Card from "../Card/Card";
import { getBeers } from "../../services/api/Beers";

const HomeContent = ({ beers, cart, page, send }) => {
    const changePage = (newPage) => {
        getBeers(newPage).then((response) => {
            send("CHANGE_PAGE", { value: newPage, beers: response });
        });
    };

    return (
        <Main>
            <h1>Welcome to BeerShop !</h1>

            <PaginationCtnr>
                {[...Array(11).keys()].map((item, key) => (
                    <React.Fragment key={key}>
                        {key > 0 && (
                            <>
                                {page === key ? (
                                    <p>{item}</p>
                                ) : (
                                    <button onClick={() => changePage(item)}>
                                        {item}
                                    </button>
                                )}
                            </>
                        )}
                    </React.Fragment>
                ))}
            </PaginationCtnr>

            <CardsCtnr>
                {beers?.map((beer, key) => (
                    <Card key={key} item={beer} cart={cart} send={send} />
                ))}
            </CardsCtnr>

            <PaginationCtnr>
                {[...Array(11).keys()].map((item, key) => (
                    <React.Fragment key={key}>
                        {key > 0 && (
                            <>
                                {page === key ? (
                                    <p>{item}</p>
                                ) : (
                                    <button onClick={() => changePage(item)}>
                                        {item}
                                    </button>
                                )}
                            </>
                        )}
                    </React.Fragment>
                ))}
            </PaginationCtnr>
        </Main>
    );
};

export default HomeContent;
