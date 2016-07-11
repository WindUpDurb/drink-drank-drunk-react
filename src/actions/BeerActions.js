"use strict";

import * as types from "./actionTypes";
import * as requestStatus from "./requestStatusActions";


export function fetchBeerStylesDirectoriesSuccess(beerStyles) {
    console.log("In Success");
    return {
        type: types.LOAD_BEER_DIRECTORY_SUCCESS,
        beerStyles: beerStyles
    };
}

export function fetchStyleContentsSuccess(styleContents, pageNumber) {
    return {
        type: types.FETCH_STYLE_CONTENTS_SUCCESS,
        styleContents: styleContents,
        pageNumber: pageNumber
    };
}

export function fetchStyleContents(beerStyle, pageNumber) {
    console.log("Fetching")
    return function(dispatch) {
        return fetch(`/api/breweryAPI/beerCategoryContents/${beerStyle}/${pageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                console.log("Check out this data: ", parsedResponse);
                if (parsedResponse.status === "success") {
                    dispatch(fetchStyleContentsSuccess(parsedResponse.data, parsedResponse.currentPage));
                }
            })
            .catch(error => {
                console.log("Error fetching: ", error);
            });
    };
}

export function loadBeerDirectory () {

    return function(dispatch) {

      return fetch("/api/breweryAPI/beerDirectories")
          .then(response => {
              return response.json();
          })
          .then(parsedResponse => {
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
              console.log("Beer directories: ", beerDirectories);
              dispatch(fetchBeerStylesDirectoriesSuccess(beerDirectories));
          })
          .catch(error => {
              console.log("Error: ", error);
          });
    };
}