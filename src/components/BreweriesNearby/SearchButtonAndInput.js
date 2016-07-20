"use strict";

import React, {PropTypes} from "react";


export const CustomSearch = ({submitSearch, updateSearchState, search, toggleSearch}) => {
    if (!search) {
        return (
            <button
                onClick={toggleSearch}
                className="btn btn-raised"
                id="customSearchButton">Search by Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        );
    } else {
        return (
        <form onSubmit={submitSearch}>
            <div className="form-group label-static">
                <label className="control-label">Custom Search by Location</label>
                <input
                    onChange={updateSearchState}
                    type="text"
                    className="form-control"
                    placeholder="Enter a location to search from"/>
                    <p className="help-block">Let's find you some breweries</p>
            </div>
        </form>
        );
    }

};


/*<div className="row">
    <div className="col-sm-offset-5 col-sm-2">
        <button className="btn btn-raised" id="customSearchButton">Search by Location</button>
    </div>
</div>*/
CustomSearch.propTypes = {
    search: PropTypes.bool,
    toggleSearch: PropTypes.func.isRequired,
    updateSearchState: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired
};