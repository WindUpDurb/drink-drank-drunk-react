"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";

export function fetchBeerStylesDirectoriesSuccess(beerStyles) {
    return {
        type: types.LOAD_BEER_DIRECTORY_SUCCESS,
        beerStyles: beerStyles
    };
}

export function updateActiveUser(activeUserData) {
    return {
        type: types.UPDATE_ACTIVE_USER,
        activeUser: activeUserData
    };
}

export function fetchStyleContentsSuccess(styleContents, styleDescription, pageNumber) {
    return {
        type: types.FETCH_STYLE_CONTENTS_SUCCESS,
        styleDescription: styleDescription,
        styleContents: styleContents,
        pageNumber: pageNumber
    };
}

export function fetchBeerDataSuccess(beerData) {
    return {
        type: types.FETCH_BEER_DATA_SUCCESS,
        beerData: beerData
    };
}

export function fetchBeerData(beerId) {
    return function(dispatch) {
            dispatch(requestStatusActions.requestSent());
            return fetch(`/api/breweryAPI/beerMeSingle/${beerId}`)
                .then(response => {
                    return response.json();
                })
                .then(parsedResponse => {
                    dispatch(requestStatusActions.receivedRequestSuccess());
                    localStorage.setItem(beerId, JSON.stringify(parsedResponse.data));
                    dispatch(fetchBeerDataSuccess(parsedResponse.data));
                    return parsedResponse;

                })
                .catch(error => {
                    dispatch(requestStatusActions.receivedRequestError());
                    return error;
                });
        };
}

export function fetchStyleContents(beerStyle, pageNumber, fromReload) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        return fetch(`/api/breweryAPI/beerCategoryContents/${beerStyle.shortName || beerStyle}/${pageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                console.log("Check out this data: ", parsedResponse);
                dispatch(requestStatusActions.receivedRequestSuccess());
                if (parsedResponse.status === "success") {
                    dispatch(fetchStyleContentsSuccess(parsedResponse.data, beerStyle,parsedResponse.currentPage));
                    if (fromReload) {
                        return parsedResponse.data;
                    }
                }
                
            })
            .catch(error => {
                dispatch(requestStatusActions.receivedRequestError());
                return error;
            });
    };
}

export function loadBeerDirectory () {
    return function(dispatch) {
        if (localStorage.beerDirectories) {
            return dispatch(fetchBeerStylesDirectoriesSuccess(JSON.parse(localStorage.beerDirectories)));
        }
        dispatch(requestStatusActions.requestSent());
        return fetch("/api/breweryAPI/beerDirectories")
          .then(response => {
              return response.json();
          })
          .then(parsedResponse => {
              dispatch(requestStatusActions.receivedRequestSuccess());
              let beerDirectories = {};
              for (let i = 0; i < parsedResponse.data.length; i++) {
                  if (parsedResponse.data[i].categoryId <= 9) {
                      if (!beerDirectories.hasOwnProperty(parsedResponse.data[i].categoryId)) {
                          beerDirectories[parsedResponse.data[i].categoryId] = [parsedResponse.data[i]];
                      } else {
                         beerDirectories[parsedResponse.data[i].categoryId].push(parsedResponse.data[i]);
                      }
                  }
              }
              localStorage.setItem("beerDirectories", JSON.stringify(beerDirectories));
              dispatch(fetchBeerStylesDirectoriesSuccess(beerDirectories));
          })
          .catch(error => {
              dispatch(requestStatusActions.receivedRequestError());
              console.log("Error: ", error);
          });
    };
}

export function changeIfConsumed(consumed, beer, activeUser) {
    return function(dispatch){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let beerImage;
        if(beer.labels && beer.labels.medium) {
            beerImage = beer.labels.medium;
        }
        activeUser.beerData = {
            beerImage: beerImage || `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`,
            breweryName: beer.breweries[0].name,
            beerId: beer.id,
            beerName: beer.name,
            consumed: consumed
        };
        let options = {
            method: "PUT",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(activeUser)
        };
        dispatch(requestStatusActions.requestSent());
        return fetch("/api/breweryAPI/updateHasConsumed", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(updateActiveUser(parsedResponse));
                dispatch(requestStatusActions.receivedRequestSuccess());
            })
            .catch(error => {
                console.log("The error: ", error);
                dispatch(requestStatusActions.receivedRequestError());
            });

    };
}