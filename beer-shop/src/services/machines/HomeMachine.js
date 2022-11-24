import { assign, createMachine } from "xstate";
import { getBeers } from "../api/Beers";

const initialContext = {
    beers: [],
    cart: [],
    beer: null,
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
                    GO_DETAILS: {
                        target: "beerDetails",
                        actions: assign((context, event) => ({
                            ...context,
                            beer: event.beer,
                        })),
                    },
                },
            },
            beerDetails: {
                on: {
                    ADD_TO_CART: {
                        target: "addedToCart",
                        actions: assign((context, event) => ({
                            ...context,
                            cart: [
                                ...context.cart,
                                { name: event.name, quantity: 1 },
                            ],
                        })),
                    },
                },
            },
            addedToCart: {
                on: {
                    BACK_TO_IDLE: {
                        target: "idle",
                    },
                },
            },
        },
    },
    {
        services: {
            getBeers: () => getBeers(),
        },
    }
);

export default HomeMachine;
