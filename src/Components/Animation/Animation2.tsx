import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { AmountType } from '../../Types/AmountVisual';
import './Animation2.css';
import { Cube} from './Cube';

interface IAnimation2 {
    amountVisual: AmountType[];
}

export const Animation2: React.FC<IAnimation2> = ({ amountVisual }) => {

    let visualObjects = { amountVisual };
    let visualAmount: number = 0;
    let perspective = document.getElementById('perspective');
    const [children, setChildren] = useState<React.ReactElement[]>([]);
    const visuals = () => {

        let visualAmount = 0;

        visualObjects.amountVisual.forEach((object) => {
            for (let index = 0; index < object.amount; index++) {
                if (visualAmount > 141) {
                    visualAmount = 141;
                } else {
                    visualAmount += 1;
                }

            }
        })



        return visualAmount;
    }

    console.log(children);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        visualObjects = { ...visualObjects, amountVisual }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        visualAmount = visuals();

        let copyArray = [];

        for (let index = 0; index < visualAmount; index++) {

            if (index % 10 === 0 && index !== 0) {
                copyArray.push(<Cube/>)
                
            }
    
        }

        setChildren(copyArray);
    }, [amountVisual]);

    

    return (
        <section className='Animation2'>
            <div className="perspective" id='perspective'>
                {children}
            </div>
        </section>
    );
}