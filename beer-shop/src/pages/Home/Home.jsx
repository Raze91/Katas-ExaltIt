import Navbar from "../../components/Navbar/Navbar";
import HomeMachine from "../../services/machines/HomeMachine";
import Card from "../../components/Card/Card";

import { useMachine } from "@xstate/react";
import { Main, CardsCtnr } from "./styled";

const Home = () => {
    const [state, send] = useMachine(HomeMachine);
    const { beers } = state.context;

    console.log(beers);
    return (
        <>
            <header>
                <Navbar active={"home"} />
            </header>
            <Main>
                <h1>Welcome to BeerShop !</h1>

                <CardsCtnr>
                    {beers?.map((beer, key) => (
                        <Card key={key} item={beer} />
                    ))}
                </CardsCtnr>
            </Main>
        </>
    );
};

export default Home;
