import Navbar from "../../components/Navbar/Navbar";
import HomeMachine from "../../services/machines/HomeMachine";

import { useMachine } from "@xstate/react";
import HomeContent from "../../components/HomeContent/HomeContent";
import BeerDetails from "../../components/BeerDetails/BeerDetails";
import AddedToCart from "../../components/AddedToCart/AddedToCart";

const Home = () => {
    const [state, send] = useMachine(HomeMachine);
    const { beers, beer } = state.context;

    return (
        <>
            <header>
                <Navbar state={state} send={send} />
            </header>

            {state.matches("idle") && <HomeContent beers={beers} send={send} />}
            {state.matches("beerDetails") && (
                <BeerDetails beer={beer} send={send} />
            )}
            {state.matches("addedToCart") && <AddedToCart send={send} />}
            {state.matches("cart") && <h1>Cart</h1>}
        </>
    );
};

export default Home;
