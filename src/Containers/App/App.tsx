import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://aveleri.com/",
    consumerKey: "ck_cfd56ff458ea681ea638d0da6a62acd6665e9791",
    consumerSecret: "cs_7624ac89b0c8f36262d420319e0e2b803a63472e",
    version: "wc/v3",
    queryStringAuth: true
  });

function App() {
  const [products, setProducts] = useState([]);
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
  };




  return (
    <div className="App">
      {

      }
      <Product></Product>
      
    </div>
  );
}

export default App;
