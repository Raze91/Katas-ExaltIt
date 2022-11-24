import { assign, createMachine } from "xstate";
import { getBeers } from "../api/Beers";

const initialContext = {
    beers: [],
    cart: [],
    beer: null,
    page: 1,
    page_limit: 25
};

const addItem = (cart, beer) => {
    let beerToAdd = cart.find((item) => item.name === beer.name);

    beerToAdd
        ? beerToAdd.amount++
        : cart.push({
              image_url: beer.image_url,
              name: beer.name,
              amount: 1,
          });

    return cart;
};

const changeAmount = (cart, name, amount) => {
    if (amount > 0) {
        let item = cart.find((item) => item.name === name);
        item.amount = Number(amount);

        return cart;
    } else {
        return deleteItem(cart, name);
    }
};

const deleteItem = (cart, name) => {
    return cart.filter((item) => item.name !== name);
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
                        target: "addedToCart",
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
            addedToCart: {
                on: {
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
