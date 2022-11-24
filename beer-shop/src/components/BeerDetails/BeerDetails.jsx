import React from "react";
import { Main, ImgCtnr, DetailsContent, ContentHeader } from "./styled";

const BeerDetails = ({ beer, cart, send }) => {
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

                {cart.filter((cartItem) => cartItem.name === beer.name)
                    .length === 0 ? (
                    <button
                        onClick={() => {
                            send("ADD_TO_CART", { beer: beer });
                        }}
                    >
                        Add to cart
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            send("DELETE_CART_ITEM", { name: beer.name });
                        }}
                    >
                        Remove from cart
                    </button>
                )}
            </DetailsContent>
        </Main>
    );
};

export default BeerDetails;
