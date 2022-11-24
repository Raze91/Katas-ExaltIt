import React from "react";
import {
    Main,
    CartBlock,
    CartItem,
    CartItemList,
    CartItemContent,
    CartItemImage,
    CartItemManagement,
} from "./styled";

const Cart = ({ cart, send }) => {
    return (
        <Main>
            {cart.length > 0 ? (
                <CartBlock>
                    <h2>Your cart</h2>

                    <CartItemList>
                        {cart.map((item, key) => (
                            <React.Fragment key={key}>
                                <hr />
                                <CartItem>
                                    <CartItemImage
                                        onClick={() =>
                                            send("GO_TO_DETAILS", {
                                                beer: item.beer,
                                            })
                                        }
                                    >
                                        <img
                                            src={item.beer.image_url}
                                            alt={item.beer.name}
                                        />
                                    </CartItemImage>
                                    <CartItemContent>
                                        <h3
                                            onClick={() => {
                                                send("GO_TO_DETAILS", {
                                                    beer: item.beer,
                                                });
                                            }}
                                        >
                                            {item.beer.name}
                                        </h3>
                                        <CartItemManagement>
                                            <p>
                                                Amount:{" "}
                                                <select
                                                    value={item.amount}
                                                    onChange={(e) =>
                                                        send("CHANGE_AMOUNT", {
                                                            name: item.beer
                                                                .name,
                                                            amount: e.target
                                                                .value,
                                                        })
                                                    }
                                                >
                                                    {[...Array(10).keys()].map(
                                                        (amount, amountKey) => (
                                                            <option
                                                                key={amountKey}
                                                            >
                                                                {amount}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </p>
                                            <button
                                                onClick={() => {
                                                    send("DELETE_ITEM", {
                                                        name: item.beer.name,
                                                    });
                                                }}
                                            >
                                                Supprimer
                                            </button>
                                        </CartItemManagement>
                                    </CartItemContent>
                                </CartItem>
                            </React.Fragment>
                        ))}
                    </CartItemList>
                </CartBlock>
            ) : (
                <CartBlock>
                    <h2>Your cart is empty</h2>
                    <p>
                        Go add some beers{" "}
                        <button
                            className="link"
                            onClick={() => {
                                send("BACK_TO_IDLE");
                            }}
                        >
                            there
                        </button>{" "}
                        !
                    </p>
                </CartBlock>
            )}
        </Main>
    );
};

export default Cart;
