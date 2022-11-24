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
    console.log(cart);

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
                                    <CartItemImage>
                                        <img
                                            src={item.image_url}
                                            alt={item.name}
                                        />
                                    </CartItemImage>
                                    <CartItemContent>
                                        <h3>{item.name}</h3>
                                        <CartItemManagement>
                                            <p>
                                                Amount:{" "}
                                                <select
                                                    value={item.amount}
                                                    onChange={(e) =>
                                                        send("CHANGE_AMOUNT", {
                                                            name: item.name,
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
                                                        name: item.name,
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
