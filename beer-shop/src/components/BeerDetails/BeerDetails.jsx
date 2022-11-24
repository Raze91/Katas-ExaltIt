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
                    <p className="tagline">{beer.tagline}</p>
                </ContentHeader>
                <p>First brewed in {beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p>
                    <strong>Volume :</strong> {beer.volume.value}{" "}
                    {beer.volume.unit}
                </p>
                <p>
                    <strong>Attenuation level :</strong>
                    {" " + beer.attenuation_level}
                </p>
                <div>
                    <p>
                        <strong>Ingredients :</strong>
                    </p>
                    <ul>
                        <li>Hops :</li>
                        <ul>
                            {beer.ingredients.hops.map((hop, key) => (
                                <li key={key}>
                                    {hop.name} : {hop.amount.value}{" "}
                                    {hop.amount.unit}, {hop.attribute}
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <ul>
                        <li>Malt :</li>
                        <ul>
                            {beer.ingredients.malt.map((malt, key) => (
                                <li key={key}>
                                    {malt.name} : {malt.amount.value}{" "}
                                    {malt.amount.unit}
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <ul>
                        <li>Yeast : {beer.ingredients.yeast}</li>
                    </ul>
                </div>
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
