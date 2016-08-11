"use strict";

import React, {PropTypes} from "react";

export const BeerLogFilter = ({onlyDranks, toggleCheckbox, filterThroughBeers, onlyToDrinks}) => {
    let toDrinksCheckbox, dranksCheckbox;
    let toggleToDrinks = () => toggleCheckbox("toDrinks");
    let toggleDranks = () => toggleCheckbox("dranks");
    if (onlyToDrinks) toDrinksCheckbox = <i onClick={toggleToDrinks} className="material-icons checkboxCustom">check_box</i>;
    if (!onlyToDrinks) toDrinksCheckbox = <i onClick={toggleToDrinks} className="material-icons checkboxCustom">check_box_outline_blank</i>;
    if (onlyDranks) dranksCheckbox = <i onClick={toggleDranks} className="material-icons checkboxCustom">check_box</i>;
    if (!onlyDranks) dranksCheckbox = <i onClick={toggleDranks} className="material-icons checkboxCustom">check_box_outline_blank</i>;

    return (
        <div className="row">
            <div className="checkBoxDiv col-xs-offset-3 col-xs-4 col-md-1 col-md-offset-1">
                    {toDrinksCheckbox}
                    <img src="/statics/beerIconNoConsumed32.png" data-toggle="tooltip" data-placement="bottom" title="Beers Yet to Drink" className="checkBoxBeerIcon"/>
            </div>
            <div className="col-xs-4 checkBoxDiv col-md-1">
                {dranksCheckbox}
                <img src="/statics/beerIconConsumed32.png" data-toggle="tooltip" data-placement="bottom" title="Beers Drank" className="checkBoxBeerIcon"/>
            </div>
            <div className="col-xs-12 col-md-5 col-md-offset-2">
                <div className="form-group label-floating">
                    <label className="control-label">Search Your Cataloged Beers</label>
                    <input onChange={filterThroughBeers} type="text" className="form-control"/>
                </div>

            </div>
        </div>
    );
};

BeerLogFilter.propTypes = {
    onlyDranks: PropTypes.bool,
    onlyToDrinks: PropTypes.bool,
    filterThroughBeers: PropTypes.func.isRequired,
    toggleCheckbox: PropTypes.func.isRequired
};