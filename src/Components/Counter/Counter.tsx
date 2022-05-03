import * as React from 'react';
import './Counter.css';

export type Counter = {
     amount : number;
     SetAmount : React.Dispatch<React.SetStateAction<number>>;
}

export const Counter: React.FC<Counter> = ({amount = 0, SetAmount}) => {

    //let [value,setValue]  = React.useState(0);

    const handleClick  = ((sign : string,_quantity : number = 1) => {
        if(amount >-1){
            if(sign === '+' ){
                SetAmount(amount +=_quantity)
            } else {
                SetAmount(amount -=_quantity)
            }
        } else {
            amount =0;
        }


    })

    return <article className="counter">
        <button onClick={()=>{handleClick("-")}} value={"-"} className="counter_btn ">-</button>
        <p className="counter_info" >{amount}</p>
        <button onClick={()=>{handleClick("+")}} value={"+"} className="counter_btn counter_btn--1">+</button>
    </article>;
}

export default Counter;