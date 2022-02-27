import * as React from 'react';
import Counter from '../Counter/Counter';
import './Product.css';

import imgNoFound from '../../Resources/No-Photo-Available.jpg';
import { useEffect, useState } from 'react';
import { AmountType } from '../../Types/AmountVisual';

export type Product = {
    name: string;
    img: string;
    type: string;
    value: string;
    weight: number;
    id: number;
    amountVisual: AmountType[];
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>;
}

export const Product : React.FC<Product> = ({ name, img, type, value,weight, id,amountVisual, setAmountVisual}) =>{
    const [amount,SetAmount] = useState<number>(0);

    useEffect(() => {
        addThisProduct();
    },[])
    const addThisProduct = () =>{
        if(amountVisual.some(amount => amount.ID === id)){

        } else{
            setAmountVisual(amountVisual => [...amountVisual,{ID: id,amount:amount}])
        }
        
    }

    return <article className="product">
        <img src={img? img:imgNoFound} alt={img? img:imgNoFound} className="product_img"/>
        <section className="product_info">
            <h1 className="product_title">{name !== ""? name: "Nomnre producto"}</h1>
            <p>Tipo: {type? type: "Tipo de producto"}</p>
            <p>Peso: {weight? weight: "Peso de producto"}</p>
        </section>
        <Counter amount={amount} SetAmount={SetAmount } ></Counter>
    </article>
}