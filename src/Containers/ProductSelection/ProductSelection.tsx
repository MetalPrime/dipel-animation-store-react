import * as React from 'react';
import './ProductSelection.css';
import { Animation } from '../../Components/Animation/Animation';
import { Product } from '../../Components/Product/Product';
import imgNoFound from '../../Resources/No-Photo-Available.jpg';

import { AmountType } from '../../Types/AmountVisual';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Filter } from '../../Components/Filter/Filter';
import { Animation2 } from '../../Components/Animation/Animation2';

export type ProductSelection = {
    scriptLoaded: boolean,
    amountVisual: AmountType[],
    products: any[],
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>
}

export const ProductSelection: React.FC<ProductSelection> = ({ scriptLoaded, amountVisual, products, setAmountVisual }) => {

    let [copyProducts, setCopyProducts] = useState(Array.from(products));

    useEffect(() => {
        setCopyProducts(products);
    }, [products]);

    return <section className="ProductSelection">
        <article className="ProductSelection_animation" >
            {scriptLoaded && <Animation2></Animation2>}

        </article>

        <article className="ProductSelection_products">
            <section className="ProductSelection_editOptions">
                {scriptLoaded && <Filter products={products} setCopyProducts={setCopyProducts}></Filter>}
            </section>
            <section className="ProductSelection_productsOptions">
                <section className="ProductSelection_productsOptions_scroll">
                    {scriptLoaded && copyProducts.map(product => {
                        return <Product name={product.name} img={product.images.length ? product.images[0].src : imgNoFound} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id} shipping_class={product.shipping_class} price={product.price}></Product>
                    })}
                </section>
            </section>


        </article>


    </section>
}