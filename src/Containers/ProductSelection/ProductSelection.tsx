import * as React from 'react';
import './ProductSelection.css';
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
        <article className="ProductSelection_animation">
        {scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}
            </article>
        
        <article className="ProductSelection_products">
        {
            scriptLoaded && products.map(product => {
                return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id} shipping_class={product.shipping_class}></Product>
            })
        }
            </article>

        <article>
        <button><Link to={`/calculate`}>Continuar con la compra</Link></button>
        </article>
        
    </section>
}