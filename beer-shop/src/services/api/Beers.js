import axios from "axios";

export const getBeers = (page, page_limit) => {
    return axios
        .get(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=${page_limit}`
        )
        .then((response) => {
            return response.data;
        });
};
