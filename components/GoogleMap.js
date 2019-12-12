import React from "react"
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import fetch from 'isomorphic-unfetch';
import Layout from "./Layout";


const MY_MAPS_KEY = "AIzaSyCsGSZApvtm21DeBQgMJM4-6uyTKYszwaM"

const MyMapComponent = compose(
    
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MY_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
 
        (props => (
            <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }}>
            </GoogleMap>
        )));

ReactDOM.render(<MyMapComponent lat={-34.397} lon={150.644} isMarkerShown={false} />, document.getElementById("root"));

// export default MyMapComponent;
// // function Map() {
// //     return <Layout content={MyMapComponent}/>;




// class MyFancyComponent extends React.PureComponent {
//     state = {
//         isMarkerShown: false,
//     }

//     // componentDidMount() {
//     //     this.delayedShowMarker()
//     // }

//     delayedShowMarker = () => {
//         setTimeout(() => {
//             this.setState({ isMarkerShown: true })
//         }, 3000)
//     }

//     handleMarkerClick = () => {
//         this.setState({ isMarkerShown: false })
//         this.delayedShowMarker()
//     }

//     render() {
//         return (
//             <MyMapComponent
//                 isMarkerShown={this.state.isMarkerShown}
//                 onMarkerClick={this.handleMarkerClick}
//             />
//         )
//     }
// }
// export default MyFancyComponent;