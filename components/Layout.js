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






const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Nav />
        {props.content}
    </div>
);

export default Layout;