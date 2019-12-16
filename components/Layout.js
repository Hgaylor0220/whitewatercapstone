// import React, { Fragment } from 'react';
import Nav from './nav';

// const Layout = props => (
//     <Fragment>
//         <Nav>
//             <meta charSet="utf-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
//             <title>{props.pageTitle || 'Realtime Geofencing'}</title>
//         </Nav>
//         {props.children}
//     </Fragment>
// );

// export default Layout;


const bodyStyle = {
    background: "#E3D9CA",
};



const layoutStyle = {
    margin: 60,
    padding: 60,
    border: '1px solid #DDD',
    background: "#556E53",
    fontfamily:"Lucida Grande",
    
};

const Layout = props => (
    <body style={bodyStyle}>
    <div style={layoutStyle}>
        <Nav />
        {props.content}
    </div>
    </body>
);

export default Layout;