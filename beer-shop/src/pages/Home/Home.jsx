import Navbar from "../../components/Navbar/Navbar";
import HomeMachine from "../../services/machines/HomeMachine";

import { useMachine } from "@xstate/react";
import HomeContent from "../../components/HomeContent/HomeContent";
import BeerDetails from "../../components/BeerDetails/BeerDetails";
import Cart from "../../components/Cart/Cart";

const Home = () => {
    const [state, send] = useMachine(HomeMachine);
    const { beers, beer, cart, page, page_limit } = state.context;

    return (
        <>
            <header>
                <Navbar state={state} cart={cart} send={send} />
            </header>

            {state.matches("idle") && <HomeContent beers={beers} cart={cart} page={page} page_limit={page_limit} send={send} />}
            {state.matches("beerDetails") && (
                <BeerDetails beer={beer} cart={cart} send={send} />
            )}
            {state.matches("cart") && <Cart cart={cart} send={send} />}
        </>
    );
};

export default Home;
