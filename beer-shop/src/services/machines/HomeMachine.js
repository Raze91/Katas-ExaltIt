import { assign, createMachine } from "xstate";
import { getBeers } from "../api/Beers";

const initialContext = {
    beers: [],
    cart: [],
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
            idle: {},
        },
    },
    {
        services: {
            getBeers: () => getBeers(),
        },
    }
);

export default HomeMachine;
