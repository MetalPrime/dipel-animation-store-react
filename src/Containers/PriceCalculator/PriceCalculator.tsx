import * as React from 'react';
import { MapDistance } from '../../Components/MapDistance/MapDistance';

//import './PriceCalculator.css';

interface PriceCalculator {
    scriptLoaded: boolean;
}

export const PriceCalculator: React.FC<PriceCalculator> = ({scriptLoaded}) => {
    return (
<section className='PriceCalculator'>
    { scriptLoaded && (<MapDistance></MapDistance>)}
</section>
);
}