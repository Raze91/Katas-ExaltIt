import axios from "axios";

export const getBeers = (page) => {
    return axios
        .get(`https://api.punkapi.com/v2/beers?page=${page}`)
        .then((response) => {
            return response.data;
        });
};
