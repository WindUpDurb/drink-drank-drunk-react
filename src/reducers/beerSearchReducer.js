import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function beerSearchReducer(state = initialState.beerSearch, action) {
    switch(action.type) {
        case types.FETCH_BEER_SEARCH_SUCCESS:
            return (
                Object.assign({}, state, {query: action.query, searchResults: action.searchResults})
            );

        default:
            return state;
    }
}