import * as React from 'react';

import { Animation } from '../../Components/Animation/Animation';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { AmountType } from '../../Types/AmountVisual';
import { Link } from 'react-router-dom';

export type ProductSelection = {
    scriptLoaded : boolean,
    amountVisual: AmountType[],
    products: any[],
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>
}

export const ProductSelection: React.FC<ProductSelection> = ({ scriptLoaded,amountVisual, products,setAmountVisual }) => {
    return <section className="ProductSelection">
        {scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}

        {
            scriptLoaded && products.map(product => {
                return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id}></Product>
            })
        }

        <Link to={`/calculate`}>Continuar con la compra</Link>
    </section>
}