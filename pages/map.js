import Layout from '../components/Layout';
import Map from '../components/Map'
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const Gmap = props => (
//     <Layout>
//         <h1>Google map</h1>
//         <ul>
//             {props.rivers.map(river => (
//                 <li key={river.id}>
//                     <Link href="/p/[id]" as={`/p/${river.id}`}>
//                         <a>{river.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// );

// Gmap.getInitialProps = async function () {
//     const API_KEY = process.env.GMAPS_API_KEY;
//     const res = await fetch(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`);
//     const data = await res.json();

//     console.log(`Show data fetched. Count: ${data.length}`);

//     return {
//         rivers: data.map(entry => entry.river)
//     };
// };

// export default Gmap;


const map = {Map};

export default function GoogleMap() {
    return <Layout content={map} />;
}



// import React from 'react';
// import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

// function Map() {
//     return(
//         <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.631062, lng: -122.671570}}/>
//     );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// export default function App() {
//     return (
//         <div style={{width:'100vw', height= '100vh'}}>
//         <WrappedMap
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//             loadingElement={<div style={{height: "100%"}}/>}
//             containerElement={<div style={{ height: "100%" }} />}
//             mapElement={<div style={{ height: "100%" }} />}
//             />
//         </div>
//     );
// }