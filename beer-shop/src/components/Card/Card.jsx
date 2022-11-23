import React from "react";

import { CardContent, CardCtnr, CardImgCtnr } from "./styled";

const Card = ({ item }) => {
    return (
        <CardCtnr>
            <CardImgCtnr>
                <img src={item.image_url} alt={item.name} />
            </CardImgCtnr>
            <CardContent>
                <h2>{item.name}</h2>
                <p>{item.tagline}</p>
            </CardContent>
        </CardCtnr>
    );
};

export default Card;