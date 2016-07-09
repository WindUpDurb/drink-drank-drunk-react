"use strict";

import React from "react";

const FooterSection = () => {

    return (
        <footer className="footer footerStyle">
            <div className="w-section findmesection">
                <div className="w-container">
                    <div className="text-center">
                        <br/>
                            <h4>Find me and this project on Github at:</h4>
                            <br/>
                                <a><img src="/images/GitHub-Mark-32px.png"/></a>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-4 col-sm-1 col-sm-offset-5">
                        <a href="http://www.windupdurb.com/#!/">Blog</a>
                    </div>
                    <div className="col-xs-2 col-sm-1">
                        <a> Home</a>
                    </div>
                </div>
                <div className="subjectBreak container-fluid"></div>
            </div>
        </footer>
    );
};

export default FooterSection;