import React from 'react';

const placeholderShort = require('../img/placeholder-short.png')

const Card = (props) => {
    return (
        <div
            className={`card text-center ${props.margin
            ? `mt-${props.margin}`
            : ''}`}>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">LOREM IPSUM LOREM</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-primary pb-2 mb-5 bg-mobile">
                <div className="container h-100">
                    <div className="row h-100 d-none d-md-block mb-4">
                        <div className="col-lg-24 py-2">
                            <a href="" className="float-right text-white">Link 3</a>
                            <a href="" className="float-right text-white mx-4">
                                • Link 2 •
                            </a>
                            <a href="" className="float-right text-white">Link 1</a>
                        </div>
                    </div>
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-16 my-4">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner rounded">
                                    <div className="carousel-item active">
                                        <img
                                            className="d-block w-100 img-fluid mx-auto rounded"
                                            src={placeholderShort}
                                            alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100 img-fluid mx-auto rounded"
                                            src={placeholderShort}
                                            alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block w-100 img-fluid mx-auto rounded"
                                            src={placeholderShort}
                                            alt="Second slide"/>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 my-4">
                            <div className="container bg-white p-2 rounded">
                                <Card/>
                                <Card margin="2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
};
export default Header;