"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";
import toastr from "toastr";

export function fetchBeerStylesDirectoriesSuccess(beerStyles) {
    return {
        type: types.LOAD_BEER_DIRECTORY_SUCCESS,
        beerStyles: beerStyles
    };
}

export function updateUserBeerData(toUpdateWith) {
    return {
        type: types.UPDATE_USER_BEER_DATA,
        updatedBeerData: toUpdateWith
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

export function fetchBeerSearchSuccess(searchResults, query) {
    return {
        type: types.FETCH_BEER_SEARCH_SUCCESS,
        searchResults: searchResults,
        query: query
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

export function fetchStyleContents(beerStyle, pageNumber) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        return fetch(`/api/breweryAPI/beerCategoryContents/${beerStyle.shortName || beerStyle}/${pageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                if (parsedResponse.status === "success") {
                    dispatch(fetchStyleContentsSuccess(parsedResponse.data, beerStyle,parsedResponse.currentPage));
                    localStorage.setItem(`${beerStyle}${pageNumber}`, JSON.stringify(parsedResponse.data));
                    return {success: "Got it."};                }
                
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

export function addToDrink(beer, activeUser) {
    return function(dispatch){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let beerImage;
        if(beer.labels && beer.labels.medium) {
            beerImage = beer.labels.medium;
        }
        let dataToUpdateWith = Object.assign({}, activeUser);
        dataToUpdateWith.beerData = {
            beerImage: beerImage || `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`,
            breweryName: beer.breweries[0].name,
            beerId: beer.id,
            beerName: beer.name
        };
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(dataToUpdateWith)
        };
        return fetch("/api/users/addToToDrink", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(updateUserBeerData(parsedResponse));
            })
            .catch(error => {
               console.log("Error: ", error); 
            });
    };
}

export function saveBeerRating(beerData, activeUser, newRating) {
    return function(dispatch){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let dataToUpdateWith = Object.assign({}, activeUser);
        dataToUpdateWith.beerId = beerData.id;
        dataToUpdateWith.newBeerRating = newRating;
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(dataToUpdateWith)
        };
        return fetch("/api/users/saveBeerRating", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                console.log("parsed response: ", parsedResponse)
                dispatch(updateUserBeerData(parsedResponse));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}

export function fetchBeerSearchResults(query) {
    return function(dispatch) {
        let queryString = query.replace(/\s/gi, "%20");
        return fetch(`/api/breweryAPI/beerSearch/${queryString}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                if(parsedResponse.totalResults > 0) {
                    dispatch(fetchBeerSearchSuccess(parsedResponse.data, query));
                    return({success: "Got them beers"});
                } else {
                    toastr.error(`Your search for ${query} yielded no results. Try another beer, or double-check the spelling.`);
                }
            })
            .catch(error => {
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
        let dataToUpdateWith = Object.assign({}, activeUser);
        dataToUpdateWith.beerData = {
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
            body: JSON.stringify(dataToUpdateWith)
        };
        return fetch("/api/breweryAPI/updateHasConsumed", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(updateUserBeerData(parsedResponse));
            })
            .catch(error => {
                console.log("The error: ", error);
            });

    };
}