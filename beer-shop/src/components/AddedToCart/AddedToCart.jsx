import React from "react";
import { Main, ButtonsCtnr } from "./styled";

const AddedToCart = ({ send }) => {
    return (
        <Main>
            <h1>The beer has successfully been added to your cart !</h1>

            <ButtonsCtnr>
                <button
                    onClick={() => {
                        send("BACK_TO_IDLE");
                    }}
                >
                    Return to the homepage
                </button>
                <button
                    onClick={() => {
                        send("GO_TO_CART");
                    }}
                >
                    Check your cart
                </button>
            </ButtonsCtnr>
        </Main>
    );
};

export default AddedToCart;
