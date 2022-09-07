import React, { useEffect, useState } from 'react';
import './App.css';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { loadMapApi } from '../../Utils/GoogleMapsUtils';
import { AmountType } from '../../Types/AmountVisual';
import { Route, Routes } from 'react-router-dom';
import { ProductSelection } from '../ProductSelection/ProductSelection';
import { PriceCalculator } from '../PriceCalculator/PriceCalculator';
import { ProductCheckout } from '../ProductCheckout/ProductCheckout';

const api = new WooCommerceRestApi({
  url: process.env.REACT_APP_WOOCOMMERCE_LINK || "",
  consumerKey: process.env.REACT_APP_WOOCOMMERCE_RESTAPI_CONSUMERKEY || "",
  consumerSecret: process.env.REACT_APP_WOOCOMMERCE_RESTAPI_CONSUMERSECRET || "",
  version: "wc/v3",
  queryStringAuth: true,
  axiosConfig: { headers: {} }
});

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [amountVisual, setAmountVisual] = useState<AmountType[]>([]);

  let fetchOrders = async () => {
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

  //console.log(products);


  return (
      <Routes>
        <Route path="/" element={<ProductSelection scriptLoaded={scriptLoaded} amountVisual={amountVisual} products={products} setAmountVisual={setAmountVisual}></ProductSelection>}>
          
        </Route>
        <Route path="/calculate" element={<PriceCalculator scriptLoaded={scriptLoaded} products={products} amountVisual={amountVisual} ></PriceCalculator>}>
          
        </Route>

        <Route path="/checkout" element={<ProductCheckout api={api}></ProductCheckout>}>

        </Route>
      </Routes>

  );
}

export default App;
