import Navbar from "../../components/Navbar/Navbar";
import HomeMachine from "../../services/machines/HomeMachine";

import { useMachine } from "@xstate/react";
import HomeContent from "../../components/HomeContent/HomeContent";
import BeerDetails from "../../components/BeerDetails/BeerDetails";

const Home = () => {
    const [state, send] = useMachine(HomeMachine);
    const { beers, beer } = state.context;

    return (
        <>
            <header>
                <Navbar active={"home"} />
            </header>

            {state.matches("idle") && <HomeContent beers={beers} send={send} />}
            {state.matches("beerDetails") && <BeerDetails beer={beer} />}
        </>
    );
};

export default Home;
