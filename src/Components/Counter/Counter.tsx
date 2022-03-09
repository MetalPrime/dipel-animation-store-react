import * as React from 'react';
import './Counter.css';

export type Counter = {
     amount : number;
     SetAmount : React.Dispatch<React.SetStateAction<number>>;
}

export const Counter: React.FC<Counter> = ({amount, SetAmount}) => {

    //let [value,setValue]  = React.useState(0);

    const handleClick  = ((sign : string) => {
        if(sign === '+'){
            SetAmount(amount +=1)
        } else {
            SetAmount(amount -=1)
        }

    })

    return <article className="counter">
        <button onClick={()=>{handleClick("-")}} value={"-"} className="counter_btn">-</button>
        <p className="counter_info">{amount}</p>
        <button onClick={()=>{handleClick("+")}} value={"+"} className="counter_btn">+</button>
    </article>;
}

export default Counter;