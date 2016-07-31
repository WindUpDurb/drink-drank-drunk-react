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