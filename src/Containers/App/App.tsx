import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { MapDistance } from '../../Components/MapDistance/MapDistance';
import { loadMapApi } from '../../Utils/GoogleMapsUtils';
import { AmountType } from '../../Types/AmountVisual';
import { Animation } from '../../Components/Animation/Animation';



const api = new WooCommerceRestApi({
    url: "https://aveleri.com/",
    consumerKey: process.env.REACT_APP_WOOCOMMERCE_RESTAPI_CONSUMERKEY || "",
    consumerSecret: process.env.REACT_APP_WOOCOMMERCE_RESTAPI_CONSUMERSECRET || "", 
    version: "wc/v3",
    queryStringAuth: true,
    axiosConfig: { headers: {}}
  });

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [amountVisual, setAmountVisual] = useState<AmountType[]>([]);

  console.log("Env variable", process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  let fetchOrders = () => {
    api
      .get("products", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);

      });
  }; 

  useEffect(() => {
    fetchOrders();
  }, []);



const [scriptLoaded, setScriptLoaded] = useState(false);

useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
        setScriptLoaded(true);
    });
}, []);


  return (
    <div className="App">
     { scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}    
      
        {
        scriptLoaded && products.map(product  => {
          return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id}></Product>
        })
      }  
      { scriptLoaded && (<MapDistance></MapDistance>)}
      
    </div>
  );
}

export default App;
