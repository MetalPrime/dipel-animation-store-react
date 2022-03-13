import * as React from 'react';
import { Input } from '../Input/Input';
import './MapDistance.css';
import Geocode from "react-geocode";
import { AmountType } from '../../Types/AmountVisual';
import { Direction } from '../../Types/Direction';


export type MapDistance = {
  totalProducts: AmountType[];
  showDistance: Direction[];
  setShowDistance: React.Dispatch<React.SetStateAction<Direction[]>>;
}


export const MapDistance: React.FC<MapDistance> = ({totalProducts,showDistance,setShowDistance }) => {

  const service = new google.maps.DistanceMatrixService();
  console.log(totalProducts);
  let barrioObreroLocation = {
    lat:3.4503372,
    lng:-76.5208275
  }

  let santanderDeQuilichaoLocation = {
    lat:2.9224721,
    lng:-76.5869006
  }

  let acopiLocation = {
    lat:3.5021583,
    lng:-76.5638021
  }





  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "");

  Geocode.setLanguage("es");

  Geocode.setRegion("co");
  Geocode.enableDebug(false);


  const handleSubmitted = (event: any) => {
    event.preventDefault();
    Geocode.fromAddress(event.target.Destino.value + ", Valle del Cauca, Colombia").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        getLocationsNecessary({lat, lng},setShowDistance);
        //setShowDistance(returnDistance(lat, lng)+"");
        console.log(showDistance);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  const getLocationsNecessary = (destination: {lat: any, lng: any}, callback:React.Dispatch<React.SetStateAction<Direction[]>>) => {
    const ItemsWithAmount = totalProducts.filter(product => product.amount!==0);
    console.log(ItemsWithAmount);
    ItemsWithAmount.forEach(item =>{
      switch(item.shipping_class){
        case 'acabados':
          returnDistance(acopiLocation,destination,callback,'acabados','Acopi');
          break;
        case 'madera':
          returnDistance(barrioObreroLocation,destination,callback,'madera','Barrio Obrero');
          break;
        case 'ladrillos':
          returnDistance(santanderDeQuilichaoLocation,destination,callback,'ladrillos','Santander De Quilichao');
          break;
        case 'cemento':
          returnDistance(acopiLocation,destination,callback,'cemento','Acopi');
          break;
        case 'acero':
          returnDistance(acopiLocation,destination,callback,'acero','Acopi');

            break;

      }
     
    })
  }

  const returnDistance = (origin:{lat: any, lng: any},destination:{lat: any, lng: any}, callback: React.Dispatch<React.SetStateAction<Direction[]>>, shipping_class: string,place:string) => {
    const originLocation = new google.maps.LatLng(origin.lat, origin.lng);
    const destinationLocation = new google.maps.LatLng(destination.lat, destination.lng);
    const request = {
      origins: [originLocation],
      destinations: [destinationLocation],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }


    service.getDistanceMatrix(request, (res, status) => {
      console.log(res, status);
      //callback(showDistance => [...showDistance,{distance: res!.rows[0]!.elements[0]?.distance?.text]!});
      const obj: Direction ={
        place: place,
        duration: res!.rows[0]!.elements[0]?.duration?.text!,
        distance: res!.rows[0]!.elements[0]?.distance?.text!,
        shipping_class: shipping_class
      }

      
      callback(showDistance => [...showDistance,obj])
    });
    /* const finalDistance = Math.round(distanceInMeters/1000);
    return finalDistance; */
  }

  console.log(showDistance);

  return <section className="PriceCalculator__Search">
    <div id="map" className='PriceCalculator__Map'></div>
    <h1>Escribe tu domicilio para calcular el costo con el envio</h1>
    <section>
    <form onSubmit={handleSubmitted}>
      <Input name={'Destino'} type={'text'}></Input>
      <button type="submit" >Encontrar</button>
      <p>*Aplica sólo para municipios alrededor de Cali, Valle del Cauca</p>
    </form>
    </section>

  </section>
}


