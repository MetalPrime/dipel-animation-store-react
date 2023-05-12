import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import * as React from 'react';
import { useEffect } from 'react';
import md5 from 'md5';

export type IProductCheckout = {
  api: WooCommerceRestApi
}

export const ProductCheckout: React.FC<IProductCheckout> = ({ api }) => {

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

    console.log(md5(`${process.env.REACT_APP_PAYU_API_KEY}~${process.env.REACT_APP_PAYU_MERCHANT_ID}~TestPayU~20000~COP`))

/*     api.post("orders", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      }); */
  }

  useEffect(() => {
    api.get("payment_gateways")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [api])


  return <section className="ProductCheckout">
    <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
      <input name="merchantId" type="hidden" value="986104" />
      <input name="accountId" type="hidden" value="994251" />
      <input name="description" type="hidden" value="Test PAYU" />
      <input name="referenceCode" type="hidden" value="TestPayU" />
      <input name="amount" type="hidden" value="20000" />
      <input name="tax" type="hidden" value="3193" />
      <input name="taxReturnBase" type="hidden" value="16806" />
      <input name="currency" type="hidden" value="COP" />
      <input name="shippingAddress" type="hidden" value="calle 93 n 47 - 65" />
      <input name="shippingCity" type="hidden" value="Cali" />
      <input name="shippingCountry" type="hidden" value="CO" />
      <input name="signature" type="hidden" value={md5(`${process.env.REACT_APP_PAYU_API_KEY}~${process.env.REACT_APP_PAYU_MERCHANT_ID}~TestPayU~20000~COP`)} />
      <input name="test" type="hidden" value="0" />
      <input name="buyerEmail" type="hidden" value="test@test.com" />
      <input name="responseUrl" type="hidden" value="http://www.dipelsas.com/response" />
      <input name="confirmationUrl" type="hidden" value="http://www.dipelsas.com/confirmation" />
      <input name="Submit" type="submit" value="Send" />
    </form>

    <button onClick={handleNewOrder}>Crear orden</button>
  </section>
}