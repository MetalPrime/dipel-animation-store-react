import * as React from 'react';
import { Input } from '../Input/Input';
import './MapDistance.css';
import Geocode from "react-geocode";


export type MapDistance = {

}




export const MapDistance : React.FC<MapDistance> = ({}) => {

    let initialLocation = {
        lat: 3.431933,
        lng: -76.511305,
    }
    
    const homeLocation = new google.maps.LatLng(initialLocation);
    Geocode.setApiKey("AIzaSyAs-DNFDBMOylpzcW_LNdduoh5RCFHSZhE");

    Geocode.setLanguage("es");

    Geocode.setRegion("co");
    Geocode.enableDebug(false);


    const handleSubmitted = (event: any) => {
        event.preventDefault();
          Geocode.fromAddress(event.target.Destino.value).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              returnDistance(lat, lng);
            },
            (error) => {
              console.error(error);
            }
          ); 
          
    }

    const returnDistance = (lat: any, lng:any) => {
        const destinationLocation = new google.maps.LatLng({lat: lat, lng: lng});
        const distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(homeLocation, destinationLocation);
        const finalDistance = Math.round(distanceInMeters/1000);
        console.log(finalDistance);
    }

    return <form onSubmit={handleSubmitted}>
    <Input name={'Destino'} type={'text'}></Input>
    <button type="submit" >Encontrar</button>
    </form>
}