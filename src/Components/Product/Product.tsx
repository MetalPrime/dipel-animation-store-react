import * as React from 'react';
import Counter from '../Counter/Counter';
import './Product.css';

import imgNoFound from '../../Resources/No-Photo-Available.jpg';

export type Product = {

}

export const Product : React.FC<Product> = () =>{
    return <article className="product">
        <img src={imgNoFound} alt="" className="product_img"/>
        <section className="product_info">
            <h1 className="product_title">Product Name</h1>
            <p>Tipo: Product Type</p>
            <p>Peso: Product Weight</p>
        </section>
        <Counter></Counter>
    </article>
}