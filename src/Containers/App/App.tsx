import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { MapDistance } from '../../Components/MapDistance/MapDistance';
import { loadMapApi } from '../../Utils/GoogleMapsUtils';



const api = new WooCommerceRestApi({
    url: "https://aveleri.com/",
    consumerKey: "ck_cfd56ff458ea681ea638d0da6a62acd6665e9791",
    consumerSecret: "cs_7624ac89b0c8f36262d420319e0e2b803a63472e",
    version: "wc/v3",
    queryStringAuth: true
  });

function App() {
  /* const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetchOrders();
  }, []);

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
  }; */


//console.log(products);

const [scriptLoaded, setScriptLoaded] = useState(false);

useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
        setScriptLoaded(true);
    });
}, []);

  return (
    <div className="App">
     {/*  {
        products.map(product  => {
          return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight}></Product>
        })
      } */}
      { scriptLoaded && (<MapDistance></MapDistance>)}
      
    </div>
  );
}

export default App;
