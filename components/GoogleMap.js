
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import fetch from 'isomorphic-unfetch';
import Layout from "./Layout";
import MapContainer from './MapContainer';
import React, { Fragment, Component } from 'react';

const API_KEY = process.env.GMAPS_API_KEY;
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;

class Map extends Component {

    render() {
        const containerStyles = {
            height: '100%',
            width: '100%',
            position: 'relative'
        };

        return <MapContainer
            googleMapURL={MAP_URL}
            loadingElement={<div style={containerStyles} />}
            containerElement={<div style={containerStyles} />}
            mapElement={<div style={containerStyles} />}
            {...this.props}
        />
    }

};

export default Map;










    // const MyMapComponent = compose(
        
    //     withProps({
    //         googleMapURL: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=IzaSyCsGSZApvtm21DeBQgMJM4-6uyTKYszwaM",
    //         loadingElement: <div style={{ height: `100%` }} />,
    //         containerElement: <div style={{ height: `400px` }} />,
    //         mapElement: <div style={{ height: `100%` }} />,
    //     }),
    //     withScriptjs,
    //     withGoogleMap
    // )((props) =>
    // <Layout>
    //     <GoogleMap
    //         defaultZoom={8}
    //         defaultCenter={{ lat: 45.631062, lng: -122.671570 }}
    //     >
    //         {props.isMarkerShown && <Marker position={{ lat: 45.631062, lng: -122.6715704 }} onClick={props.onMarkerClick} />}
    //     </GoogleMap>
    // </Layout> 
    // );

    // MyMapComponent.getInitialProps = async function () {
    //     const res = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=IzaSyCsGSZApvtm21DeBQgMJM4-6uyTKYszwaM');

    //     const data = await res.json();
    
    //     return (
    //         < MyMapComponent/>
    //     );
    // }
    // export default MyMapComponent;



    // // class MyFancyComponent extends React.PureComponent {
    // //     state = {
    // //         isMarkerShown: false,
    // //     }

    // //     // componentDidMount() {
    // //     //     this.delayedShowMarker()
    // //     // }

    // //     delayedShowMarker = () => {
    // //         setTimeout(() => {
    // //             this.setState({ isMarkerShown: true })
    // //         }, 3000)
    // //     }

    // //     handleMarkerClick = () => {
    // //         this.setState({ isMarkerShown: false })
    // //         this.delayedShowMarker()
    // //     }

    // //     render() {
    // //         return (
    // //             <MyMapComponent
    // //                 isMarkerShown={this.state.isMarkerShown}
    // //                 onMarkerClick={this.handleMarkerClick}
    // //             />
    // //         )
    // //     }
    // // }
    // // export default MyFancyComponent;