"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";
import * as FunctionTools from "./FunctionTools";
import {browserHistory} from "react-router";
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

export function updateGlobalBeerRatingState(rating) {
    return {
        type: types.UPDATE_GLOBAL_BEER_RATING,
        globalBeerRating: rating
    };
}

export function updateBeerDiscussion(discussion) {
    return {
        type: types.UPDATE_BEER_DISCUSSION,
        discussion
    };
}

export function fetchStyleContentsSuccess(styleContents, currentPage, numberOfPages) {
    return {
        type: types.FETCH_STYLE_CONTENTS_SUCCESS,
        styleContents,
        currentPage,
        numberOfPages
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

export function dispatchCurrentBeer(beerData) {
    return {
        type: types.SET_CURRENT_BEER,
        currentBeer: beerData
    };
}

export function setCurrentBeerAndTransistion(beerData) {
    return function (dispatch) {
        dispatch(dispatchCurrentBeer(beerData));
        browserHistory.push(`/beer/${beerData.id}`);
        /*FunctionTools.delayFunction(function(){
            browserHistory.push(`/beer/${beerData.id}`);
        }, 1000);*/

    };
}

export function beerMeRandom() {
    return function (dispatch) {
        dispatch(requestStatusActions.requestSent());
        return fetch("/api/breweryAPI/beerMe")
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                if (parsedResponse.status === "success") {
                    dispatch(requestStatusActions.receivedRequestSuccess());
                    dispatch(fetchBeerDataSuccess(parsedResponse.data));
                    browserHistory.push(`/beer/${parsedResponse.data.id}`);
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            });
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
                    dispatch(fetchBeerDataSuccess(parsedResponse.data));
                    browserHistory.push(`/beer/${beerId}`);

                })
                .catch(error => {
                    dispatch(requestStatusActions.receivedRequestError());
                    return error;
                });
        };
}

export function fetchStyleContents(styleId, pageNumber) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        return fetch(`/api/breweryAPI/beerCategoryContents/${styleId}/${pageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                if (parsedResponse.status === "success") {
                    dispatch(fetchStyleContentsSuccess(parsedResponse.data, parsedResponse.currentPage, parsedResponse.numberOfPages));
                    //localStorage.setItem(`${styleId}${pageNumber}`, JSON.stringify(parsedResponse.data));
                    browserHistory.push(`/beerStyles/${styleId}/${pageNumber}`);
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
                  if (parsedResponse.data[i].categoryId < 9) {
                      if (!beerDirectories.hasOwnProperty(parsedResponse.data[i].categoryId)) {
                          beerDirectories[parsedResponse.data[i].categoryId] = {};
                          beerDirectories[parsedResponse.data[i].categoryId].styleNames = [{name: parsedResponse.data[i].name, styleId: parsedResponse.data[i].id}];
                          beerDirectories[parsedResponse.data[i].categoryId].categoryName = parsedResponse.data[i].category.name;

                      } else {
                         beerDirectories[parsedResponse.data[i].categoryId].styleNames.push({name: parsedResponse.data[i].name, styleId: parsedResponse.data[i].id});
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
        dispatch(requestStatusActions.requestSent());
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
                dispatch(requestStatusActions.receivedRequestSuccess());
                dispatch(updateUserBeerData(parsedResponse));
            })
            .catch(error => {
               console.log("Error: ", error); 
            });
    };
}

export function saveBeerRating(beerData, activeUser, newRating) {
    return function(dispatch){
        dispatch(requestStatusActions.requestSent());
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
                dispatch(requestStatusActions.receivedRequestSuccess());
                dispatch(updateUserBeerData(parsedResponse.updatedUser));
                dispatch(updateGlobalBeerRatingState(parsedResponse.updatedBeerData));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}

export function fetchBeerSearchResults(query) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        let queryString = query.replace(/\s/gi, "%20");
        return fetch(`/api/breweryAPI/beerSearch/${queryString}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                if(parsedResponse.status === "success" && parsedResponse.totalResults > 0) {
                    dispatch(fetchBeerSearchSuccess(parsedResponse.data, query));
                    browserHistory.push("/beerSearch");
                } else {
                    toastr.error(`Your search for ${query} yielded no results. Try another beer, or double-check the spelling.`);
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            });

    };
}

export function grabSupplementalBeerData(beerId) {
    return function (dispatch) {
        dispatch(requestStatusActions.requestSent());
        return fetch(`/api/users/supplementalBeerData/${beerId}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                parsedResponse.forEach(object => {
                    if (object.databaseBeer) {
                        dispatch(updateGlobalBeerRatingState(object.databaseBeer));
                    }
                    if (object.populatedDiscussion) {
                        dispatch(updateBeerDiscussion(object.populatedDiscussion));
                    }
                });
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}

export function addBeerComment(newComment, beerId, user, authorPhoto, userName) {
    return function(dispatch) {
        dispatch(requestStatusActions.requestSent());
        let toSend = {
            userName,
            authorPhoto,
            authorEmail: user,
            comment: newComment,
            beerId
        };
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(toSend)
        };

        return fetch("/api/users/addBeerComment", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                dispatch(updateBeerDiscussion(parsedResponse));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}

export function changeIfConsumed(consumed, beer, activeUser) {
    return function(dispatch){
        dispatch(requestStatusActions.requestSent());
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
                dispatch(requestStatusActions.receivedRequestSuccess());
                dispatch(updateUserBeerData(parsedResponse));
            })
            .catch(error => {
                console.log("The error: ", error);
            });

    };
}