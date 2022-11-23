import axios from "axios";

export const getBeers = () => {
    return axios.get("https://api.punkapi.com/v2/beers").then((response) => {
        return response.data;
    });
};
