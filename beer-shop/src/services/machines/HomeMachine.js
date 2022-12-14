import { assign, createMachine } from "xstate";
import { getBeers } from "../api/Beers";

const initialContext = {
    beers: [],
    cart: JSON.parse(localStorage.getItem("beershop-cart")) || [],
    beer: null,
    page: 1,
    page_limit: 25,
};

const addItem = (cart, beer) => {
    let beerToAdd = cart.find((item) => item.name === beer.name);

    beerToAdd
        ? beerToAdd.amount++
        : cart.push({
              beer: beer,
              amount: 1,
          });

    localStorage.setItem("beershop-cart", JSON.stringify(cart));
    return cart;
};

const changeAmount = (cart, name, amount) => {
    if (amount > 0) {
        let item = cart.find((cartItem) => cartItem.beer.name === name);
        item.amount = Number(amount);

        localStorage.setItem("beershop-cart", JSON.stringify(cart));
        return cart;
    } else {
        return deleteItem(cart, name);
    }
};

const deleteItem = (cart, name) => {
    let filteredCart = cart.filter((item) => item.beer.name !== name);

    localStorage.setItem("beershop-cart", JSON.stringify(filteredCart));
    return filteredCart;
};

const HomeMachine = createMachine(
    {
        id: "HomeMachine",
        initial: "init",
        context: initialContext,
        states: {
            init: {
                invoke: {
                    src: "getBeers",
                    onDone: {
                        target: "idle",
                        actions: assign((context, event) => ({
                            ...context,
                            beers: event.data,
                        })),
                    },
                    onError: {},
                },
            },
            idle: {
                on: {
                    GO_TO_DETAILS: {
                        target: "beerDetails",
                        actions: assign((context, event) => ({
                            ...context,
                            beer: event.beer,
                        })),
                    },
                    ADD_TO_CART: {
                        target: "idle",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: addItem(context.cart, event.beer),
                        })),
                    },
                    DELETE_CART_ITEM: {
                        target: "idle",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: deleteItem(context.cart, event.name),
                        })),
                    },
                    CHANGE_PAGE: {
                        target: "idle",
                        actions: assign((context, event) => ({
                            ...context,
                            beers: event.beers,
                            page: event.value,
                        })),
                    },
                    GO_TO_CART: {
                        target: "cart",
                    },
                },
            },
            beerDetails: {
                on: {
                    ADD_TO_CART: {
                        target: "beerDetails",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: addItem(context.cart, event.beer),
                        })),
                    },
                    DELETE_CART_ITEM: {
                        target: "beerDetails",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: deleteItem(context.cart, event.name),
                        })),
                    },
                    GO_TO_CART: {
                        target: "cart",
                    },
                    BACK_TO_IDLE: {
                        target: "idle",
                    },
                },
            },
            cart: {
                on: {
                    BACK_TO_IDLE: {
                        target: "idle",
                    },
                    GO_TO_DETAILS: {
                        target: "beerDetails",
                        actions: assign((context, event) => ({
                            ...context,
                            beer: event.beer,
                        })),
                    },
                    CHANGE_AMOUNT: {
                        target: "cart",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: changeAmount(
                                context.cart,
                                event.name,
                                event.amount
                            ),
                        })),
                    },
                    DELETE_ITEM: {
                        target: "cart",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: deleteItem(context.cart, event.name),
                        })),
                    },
                },
            },
        },
    },
    {
        services: {
            getBeers: (context) => getBeers(context.page, context.page_limit),
        },
    }
);

export default HomeMachine;
