import React from "react";
import { Main, ImgCtnr, DetailsContent, ContentHeader } from "./styled";

const BeerDetails = ({ beer, send }) => {
    console.log(beer);

    return (
        <Main>
            <ImgCtnr>
                <img src={beer.image_url} alt={beer.name} />
            </ImgCtnr>

            <DetailsContent>
                <ContentHeader>
                    <h1>{beer.name}</h1>
                    <p>First brewed in {beer.first_brewed}</p>
                    <p className="tagline">{beer.tagline}</p>
                </ContentHeader>
                <p>{beer.description}</p>

                <p>
                    <strong>Attenuation level :</strong>
                    {" " + beer.attenuation_level}
                </p>
                <p>
                    <strong>Brewers tips :</strong> {beer.brewers_tips}
                </p>

                <button
                    onClick={() => {
                        send("ADD_TO_CART", { name: beer.name });
                    }}
                >
                    Add to cart
                </button>
            </DetailsContent>
        </Main>
    );
};

export default BeerDetails;
