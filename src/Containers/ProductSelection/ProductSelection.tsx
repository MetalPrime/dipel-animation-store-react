import * as React from 'react';
import './ProductSelection.css';
import { Animation } from '../../Components/Animation/Animation';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import imgBackground from '../../Resources/backAnimation.jpg';
import { AmountType } from '../../Types/AmountVisual';
import { Link } from 'react-router-dom';

export type ProductSelection = {
    scriptLoaded: boolean,
    amountVisual: AmountType[],
    products: any[],
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>
}

export const ProductSelection: React.FC<ProductSelection> = ({ scriptLoaded, amountVisual, products, setAmountVisual }) => {
    return <section className="ProductSelection">
        <article className="ProductSelection_animation" style={{ backgroundImage: `url(${imgBackground})`, }}>
            {scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}
            <section className="ProductSelection_filters">
                <div className="ProductSelection_filters_container">
                    <button className="ProductSelection_filter"></button>
                    <button className="ProductSelection_filter"></button>
                    <button className="ProductSelection_filter"></button>
                    <button className="ProductSelection_filter"></button>
                    <button className="ProductSelection_filter"></button>
                    <button className="ProductSelection_filter"></button>
                </div>

            </section>
        </article>

        <article className="ProductSelection_products">
            {
                scriptLoaded && products.map(product => {
                    return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id} shipping_class={product.shipping_class} price={product.price}></Product>
                })
            }
        </article>

        <article className="Calculate">
            <button><Link to={`/calculate`}>Continuar con la compra</Link></button>
        </article>

    </section>
}