import * as React from 'react';
import Counter from '../Counter/Counter';
import './Product.css';

import imgNoFound from '../../Resources/No-Photo-Available.jpg';

export type Product = {
    name: string;
    img: string;
    type: string;
    value: string;
    weight: number;
}

export const Product : React.FC<Product> = ({ name, img, type, value,weight}) =>{
    return <article className="product">
        <img src={img? img:imgNoFound} alt={img? img:imgNoFound} className="product_img"/>
        <section className="product_info">
            <h1 className="product_title">{name !== ""? name: "Nomnre producto"}</h1>
            <p>Tipo: {type? type: "Tipo de producto"}</p>
            <p>Peso: {weight? weight: "Peso de producto"}</p>
        </section>
        <Counter></Counter>
    </article>
}