"use strict";

export function arrayToObject(array) {
    let toReturn = {};
    for (let i = 0; i < array.length; i++) {
        toReturn[array[i]._id] = array[i];
    }
    return toReturn;
}

export function arrayOfValues(object) {
    let toReturn = [];
    for (let key in object) {
        toReturn.push(object[key]);
    }
    return toReturn;
}

export function delayFunction(func, delay) {
    window.setTimeout(func, delay);
}


export function extractAllBeers (beerAndUserData) {
    let toReturn = [];
    if (beerAndUserData.sampledBeers.length) {
        toReturn = [...beerAndUserData.sampledBeers];
    }
    if (beerAndUserData.toDrink.length) {
        toReturn.push(...beerAndUserData.toDrink);
    }
    if (toReturn.length === 0 ) return null;
    return toReturn;
}

export function filterBeers(searchParams, toDrinksOnly, dranksOnly, beerArray) {
    return beerArray.filter(beer => {
        if (searchParams) {
            let searchMatch = (
                //include styles as well
                `${beer.beerName} ${beer.breweryName} `.toLowerCase()
            ).includes(searchParams.toLowerCase());
            if (searchMatch && toDrinksOnly && !dranksOnly) return (!beer.drank);
            if (searchMatch && dranksOnly && !toDrinksOnly) return (beer.drank || beer.finallyDrank);
            return searchMatch;
        } else {
            if (!toDrinksOnly && !dranksOnly || toDrinksOnly && dranksOnly) return beer;
            if (toDrinksOnly && !dranksOnly) return (!beer.drank);
            if (dranksOnly && !toDrinksOnly) return (beer.drank);
        }
    });
}