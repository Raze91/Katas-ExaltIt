import React from "react";
import {
    Main,
    ImgCtnr,
    DetailsContent,
    ContentHeader,
    ContentBody,
} from "./styled";

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
                <span>{beer.description}</span>

                <ContentBody>
                    <p>
                        <strong>Volume :</strong> {beer.volume.value}{" "}
                        {beer.volume.unit}
                    </p>
                    <p>
                        <strong>Attenuation level : </strong>
                        {beer.attenuation_level}
                    </p>
                    <div>
                        <p>
                            <strong>Ingredients :</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Hops :</strong>
                            </li>
                            <ul>
                                {beer.ingredients.hops.map((hop, key) => (
                                    <li key={key}>
                                        {hop.name} :{" "}
                                        <span>
                                            {hop.amount.value} {hop.amount.unit}
                                            , {hop.attribute}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                        <ul>
                            <li>
                                <strong>Malt :</strong>
                            </li>
                            <ul>
                                {beer.ingredients.malt.map((malt, key) => (
                                    <li key={key}>
                                        {malt.name} :{" "}
                                        <span>
                                            {malt.amount.value}{" "}
                                            {malt.amount.unit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                        <ul>
                            <li>
                                <strong>Yeast :</strong>{" "}
                                <span>{beer.ingredients.yeast}</span>
                            </li>
                        </ul>
                    </div>
                    <p>
                        <strong>Brewers tips :</strong>{" "}
                        <span>{beer.brewers_tips}</span>
                    </p>

                    {cart.filter((cartItem) => cartItem.beer.name === beer.name)
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
                </ContentBody>
            </DetailsContent>
        </Main>
    );
};

export default BeerDetails;
