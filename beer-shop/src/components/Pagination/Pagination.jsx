import React from "react";
import { PaginationCtnr } from "./styled";

const Pagination = ({ changePage, page, beers, page_limit }) => {
    return (
        <PaginationCtnr>
            <button
                onClick={() => {
                    changePage(page - 1);
                }}
                disabled={page === 1}
            >
                Prev
            </button>
            <button
                onClick={() => {
                    changePage(page + 1);
                }}
                disabled={beers.length < page_limit}
            >
                Next
            </button>
        </PaginationCtnr>
    );
};

export default Pagination;
