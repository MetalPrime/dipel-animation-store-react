import * as React from 'react';
import './Input.css';

export type Input = {
    name: string;
    type: "text" | "textarea" | "password" | "email" | "date" | "number" ;
}

export const Input : React.FC<Input> = ({name, type = "text"}) =>{
    return <>
    <p>{name}</p>
    <input type={type} name={name} id={name} placeholder={name} />
    </>
}