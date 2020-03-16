import React from 'react';
const placeholder = require('../img/placeholder.png')
import {ChevronRight} from 'react-feather';

const CardWide = () => {
    return (
        <div className="col-md-12 mb-5">
            <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                    <h4 className="card-title font-weight-bold">LOREM IPSUM LOREM</h4>
                    <p className="card-text w-75 mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="mb-4">
                    <a href="#" className="btn btn-primary w-50">LOREM IPSUM</a>
                </div>
            </div>
        </div>
    )
}

const CardImg = () => {
    return (
        <div className="col-md-12 col-lg-6 mb-5">
            <div className="card text-center shadow-sm">
                <div className="card-body">
                    <h6 className="card-title font-weight-bold">LOREM IPSUM</h6>
                    <p className="card-text">EXAMPLE TEXT</p>
                    <img src={placeholder} alt="" className="rounded img-fluid"/>
                </div>
                <div className="pb-3 px-4">
                    <a href="#" className="btn btn-primary btn-block">
                        <span className="text-center">LOREM IPSUM</span>
                        <ChevronRight className="position-absolute chevron-align-right"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

const MidSection = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <CardWide/>
                    <CardWide/>
                </div>
                <div className="row pl-3 d-none d-md-block">
                    <h4>Lorem ipsum lorem ipsum</h4>
                </div>
                <div className="row mt-4">
                    <CardImg/>
                    <CardImg/>
                    <CardImg/>
                    <CardImg/>
                </div>
                <div className="row">
                    <div className="col-lg-6 pb-3 px-4 mx-auto text-center">
                        <a href="#" className="btn btn-warning rounded w-100 text-light">
                            <span>LOREM IPSUM</span>
                            <ChevronRight className="position-absolute chevron-align-right"/>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default MidSection;