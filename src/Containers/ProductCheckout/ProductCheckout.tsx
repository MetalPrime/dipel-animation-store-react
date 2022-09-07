import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import * as React from 'react';

export type ProductCheckout = {
    api: WooCommerceRestApi
}

export const ProductCheckout : React.FC<ProductCheckout> = ({api}) =>{

    const handleNewOrder = () => {
        const data = {
            set_paid: false,
            currency: "COP",
            billing: {
              first_name: "John",
              last_name: "Doe",
              address_1: "969 Market",
              address_2: "",
              city: "San Francisco",
              state: "CA",
              postcode: "94103",
              country: "US",
              email: "john.doe@example.com",
              phone: "(555) 555-5555"
            },
            shipping: {
              first_name: "John",
              last_name: "Doe",
              address_1: "969 Market",
              address_2: "",
              city: "San Francisco",
              state: "CA",
              postcode: "94103",
              country: "US"
            },
            line_items: [
              {
                product_id: 93,
                quantity: 2
              },
              {
                product_id: 22,
                variation_id: 23,
                quantity: 1
              }
            ],
            shipping_lines: [
              {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
              }
            ]
          };
          
          api.post("orders", data)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
    }


    return <section className="ProductCheckout">
        <form className="ProductCheckout__form">
            <label >Nombre</label>
            <input type="text" name="name" placeholder="Nombre"/>
            <label htmlFor=""></label>

        </form>
        <button onClick={handleNewOrder}>Crear orden</button>
    </section>
}