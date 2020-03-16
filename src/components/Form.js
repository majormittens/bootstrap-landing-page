import React from 'react';

const Form = () => {
    return (
        <React.Fragment>
            <div
                className="border-top mt-5"
                style={{
                backgroundColor: 'white'
            }}>
                <div className="container text-center">
                    <h4 className="text-black-50 d-block d-sm-block d-md-none mt-3">Abonnez-vous a notre newsletter</h4>
                    <div className="d-flex align-items-center justify-content-between py-3">
                        <span className="text-black-50 d-none d-sm-none d-md-block">Abonnez-vous a notre newsletter</span>
                        <div className="col-lg-8 d-none d-sm-none d-md-block">
                            <input
                                type="text"
                                className="form-control custom-input shadow-sm"
                                placeholder="Nom"
                                aria-label="Nom"
                                aria-describedby="basic-addon2"/>
                        </div>
                        <div className="col-lg-8">
                            <input
                                type="text"
                                className="form-control custom-input shadow-sm"
                                placeholder="Addresse e-mail"
                                aria-label="Address e-mail"
                                aria-describedby="basic-addon2"/>
                        </div>
                        <a href="#" className="btn btn-primary rounded text-light btn-sm">
                            <span className="px-3">S'ABONNER</span>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Form;