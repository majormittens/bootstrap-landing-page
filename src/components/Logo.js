import React from 'react';

const Logo = () => {
    return (
        <React.Fragment>
            <div className="bg-dark d-none d-md-block">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            className="position-absolute logo"
                            src={require('../img/logo.png')}
                            alt=""
                            style={{
                            zIndex: 1000
                        }}/>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Logo;