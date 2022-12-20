import React, { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import './MapDistance.css';
import Geocode from "react-geocode";
import { AmountType } from '../../Types/AmountVisual';
import { Direction } from '../../Types/Direction';
import imageMapa from '../../Resources/imageMapa.jpg';
import { Link } from 'react-router-dom';
//import the necessary modules
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon, icon, latLng } from 'leaflet';

export type IMapDistance = {
  totalProducts: AmountType[];
  showDistance: Direction[];
  setShowDistance: React.Dispatch<React.SetStateAction<Direction[]>>;
}


export const MapDistance: React.FC<IMapDistance> = ({ totalProducts, showDistance, setShowDistance }) => {
  const [isLoad, setLoad] = useState(false);

  const [markerDirection, setMarkerDirection] = useState<[number, number]>();

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  const service = new google.maps.DistanceMatrixService();
  console.log(totalProducts);
  let barrioObreroLocation = {
    lat: 3.4503372,
    lng: -76.5208275
  }

  let santanderDeQuilichaoLocation = {
    lat: 2.9224721,
    lng: -76.5869006
  }

  let acopiLocation = {
    lat: 3.5021583,
    lng: -76.5638021
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
        setMarkerDirection([lat, lng])
        getLocationsNecessary({ lat, lng }, setShowDistance);
        //setShowDistance(returnDistance(lat, lng)+"");
        console.log(lat + " " + lng);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  const getLocationsNecessary = (destination: { lat: any, lng: any }, callback: React.Dispatch<React.SetStateAction<Direction[]>>) => {
    const ItemsWithAmount = totalProducts.filter(product => product.amount !== 0);
    console.log(ItemsWithAmount);
    ItemsWithAmount.forEach(item => {
      switch (item.shipping_class) {
        case 'acabados':
          returnDistanceTwo(acopiLocation, destination, callback, 'acabados', 'Acopi');
          break;
        case 'madera':
          returnDistanceTwo(barrioObreroLocation, destination, callback, 'madera', 'Barrio Obrero');
          break;
        case 'ladrillos':
          returnDistanceTwo(santanderDeQuilichaoLocation, destination, callback, 'ladrillos', 'Santander De Quilichao');
          break;
        case 'cemento':
          returnDistanceTwo(acopiLocation, destination, callback, 'cemento', 'Acopi');
          break;
        case 'acero':
          returnDistanceTwo(acopiLocation, destination, callback, 'acero', 'Acopi');

          break;

      }

    })
  }

  const returnDistance = (origin: { lat: any, lng: any }, destination: { lat: any, lng: any }, callback: React.Dispatch<React.SetStateAction<Direction[]>>, shipping_class: string, place: string) => {
    //Código para obtener la localización con Google Maps API, no está bien
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

      const obj: Direction = {
        place: place,
        duration: res!.rows[0]!.elements[0]?.duration?.text!,
        distance: res!.rows[0]!.elements[0]?.distance?.text!,
        shipping_class: shipping_class
      }


      callback(showDistance => [...showDistance, obj])
    });
  }

  const returnDistanceTwo = (origin: { lat: any, lng: any }, destination: { lat: any, lng: any }, callback: React.Dispatch<React.SetStateAction<Direction[]>>, shipping_class: string, place: string) => {
    //Porque no uso un API, no esta en el presupuesto. Toca usar las maths, si llega a haber presupuesto incluyan Google Maps API o TimeTravel.docs
    let from = latLng(origin.lat, origin.lng);
    let to = latLng(destination.lat, destination.lng);
    const distance = Number.parseInt(from.distanceTo(to).toFixed(0)) / 1000; //hasta aqui la distancia es en metros
    const intervalDuration = (distance / 60) * 60; //estamos asumiendo que son 60km.h para que nos quede el tiempo en horas -- OPTIMIZAR

    const obj: Direction = {
      place: place,
      duration: intervalDuration + " minutos apróximadamente",
      distance: distance + "km",
      shipping_class: shipping_class
    }
    callback(showDistance => [...showDistance, obj])
  }

  console.log(showDistance);

  const MyMap = () => {
    //use state to store the map center and marker location
    const [center, setCenter] = useState<[number, number]>([3.5021583, -76.5638021]);
    const [marker, setMarker] = useState<[number, number]>([3.5021583, -76.5638021]);

    return (
      <MapContainer center={center} zoom={11} scrollWheelZoom={false} id="map" className='PriceCalculator__Map'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={marker} draggable={true} interactive={true}>
          <Popup>
            <p>Localización de la empresa</p>
          </Popup>
        </Marker>
        {
          markerDirection !== undefined ? <Marker position={markerDirection} draggable={false} interactive={true} >
            <Popup>
              <p>Mi dirección</p>
            </Popup>
          </Marker> : <></>
        }
      </MapContainer >
    );
  }

  return <section className="PriceCalculator__Search">
    {isLoad && <MyMap ></MyMap>}
    <article className="PriceCalculator__Searchinfo">
      <h1>Escribe tu domicilio para calcular el costo con el envio</h1>
      <section className="PriceCalculator__Searchform">
        <form onSubmit={handleSubmitted}>
          <input placeholder="Dirección" type="text" className='="Destino' id="Destino"></input>
          <button type="submit" >Buscar</button>
          <p>*Aplica sólo para municipios alrededor de Cali, Valle del Cauca</p>
        </form>
      </section>
    </article>


  </section>
}
