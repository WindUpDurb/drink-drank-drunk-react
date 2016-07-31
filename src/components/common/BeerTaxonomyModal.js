"use strict";

import React from "react";

export const BeerTaxonomyModal = () => {
        return (
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-raised btn-lg" data-toggle="modal" data-target="#beerChart">
                        Open Beer Taxonomy
                    </button>

                    <div id="beerChart" className="modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body">
                                    <img className="img-responsive" src="/statics/beerTaxonomy.png"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
};