import React from 'react';

const SideNav = (props) => {
    return (
        <React.Fragment>
            <div
                className="sidenav text-center"
                style={{
                width: props.expanded
                    ? '250px'
                    : '0px',
                zIndex: 1000
            }}>
                <a href="javascript:void(0)" className="closebtn" onClick={props.close()}>&times;</a>
                <a href="#" className="text-white">Lorem ipsum
                </a>
                <a href="#" className="btn btn-primary btn-sm mt-2 text-white">Lorem Ipsum</a>
                <a href="#" className="btn btn-primary btn-sm mt-2 text-white">Lorem Ipsum</a>
            </div>
        </React.Fragment>
    )
};
export default SideNav;