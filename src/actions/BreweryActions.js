"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";
import toastr from "toastr";

export function dispatchNearbyBreweryResults(breweries) {
    return {
        type: types.FETCH_NEARBY_BREWERIES_SUCCESS,
        breweries: breweries
    };
}

export function customBrewerySearch(location) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify({address: location})
        };
        return fetch("/api/yelpAPI/customBrewerySearch", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                if(parsedResponse.total > 0) {
                    dispatch(dispatchNearbyBreweryResults(parsedResponse.businesses));
                } else {
                    toastr.error("It looks like there are no breweries nearby");
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            });

    };
}

export function fetchNearbyBreweryData(coordinates) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(coordinates)
        };
        return fetch("/api/yelpAPI/nearbyBreweries", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                if(parsedResponse.total > 0) {
                    dispatch(dispatchNearbyBreweryResults(parsedResponse.businesses));
                } else {
                    toastr.error("It looks like there are no breweries nearby");
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}