import * as React from 'react';
import './Counter.css';

export type Counter = {
     
}

export const Counter: React.FC<Counter> = () => {

    let [value,setValue]  = React.useState(0);

    const handleClick  = ((sign : string) => {
        if(sign === '+'){
            setValue(value +=1)
        } else {
            setValue(value -=1)
        }

    })

    return <article className="counter">
        <button onClick={()=>{handleClick("+")}} value={"+"} className="counter_btn">+</button>
        <p className="counter_info">{value}</p>
        <button onClick={()=>{handleClick("-")}} value={"-"} className="counter_btn">-</button>
    </article>;
}

export default Counter;