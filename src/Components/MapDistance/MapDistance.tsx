import * as React from 'react';
import { Input } from '../Input/Input';
import './MapDistance.css';
import Geocode from "react-geocode";
import { useState } from 'react';


export type MapDistance = {

}




export const MapDistance : React.FC<MapDistance> = ({}) => {

  const service = new google.maps.DistanceMatrixService();

    let initialLocation = {
        lat: 3.5308373,
        lng:  -76.2988047,
    }

    let [showDistance,setShowDistance] = useState<string>("");
    
    const homeLocation = new google.maps.LatLng(initialLocation);
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "");

    Geocode.setLanguage("es");

    Geocode.setRegion("co");
    Geocode.enableDebug(false);


    const handleSubmitted = (event: any) => {
        event.preventDefault();
          Geocode.fromAddress(event.target.Destino.value).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              returnDistance(lat, lng, setShowDistance);
              //setShowDistance(returnDistance(lat, lng)+"");
              console.log(showDistance);
            },
            (error) => {
              console.error(error);
            }
          ); 
          
    }

    const returnDistance = (lat: any, lng:any, callback:any) => {
        const destinationLocation = new google.maps.LatLng({lat: lat, lng: lng});
        const request = {
          origins : [homeLocation],
          destinations: [destinationLocation],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false,
        }


        service.getDistanceMatrix(request, (res, status) => {
          console.log(res, status);
          callback(res?.rows[0]?.elements[0]?.distance?.text);
        });
        /* const finalDistance = Math.round(distanceInMeters/1000);
        return finalDistance; */
    }

    return <form onSubmit={handleSubmitted}>
    <Input name={'Destino'} type={'text'}></Input>
    <h2>{initialLocation.lat +"," +initialLocation.lng}</h2>
    <h2></h2>
    <h1>La distancia entre los dos objetos es {showDistance? showDistance : "No Data"}</h1>
    <button type="submit" >Encontrar</button>
    </form>
}