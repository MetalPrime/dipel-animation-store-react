import * as React from 'react';
import { useState } from 'react';
import { MapDistance } from '../../Components/MapDistance/MapDistance';
import { AmountType } from '../../Types/AmountVisual';
import { Direction } from '../../Types/Direction';

//import './PriceCalculator.css';

interface PriceCalculator {
    scriptLoaded: boolean;
    products: any[];
    amountVisual: AmountType[];
}

export const PriceCalculator: React.FC<PriceCalculator> = ({scriptLoaded, products, amountVisual}) => {

    const [totalPrice,setTotalPrice] = useState<number>(0);
    const [showDistance, setShowDistance] = useState<Direction[]>([]);

    console.log({amountVisual})
    console.log({products})
    const getProductWithItems = (products: AmountType[]) => {
        let sumOfItems : AmountType[] = [];
        if(scriptLoaded){
            products.forEach(product => {
                if(sumOfItems.some(item => item.shipping_class === product.shipping_class)){
    
                } else {
                    let similarProducts = products.filter(pro => {  if(pro.shipping_class === product.shipping_class) {return pro}});
                    let obj = similarProducts.reduce((acc, actual) => ({
                        ...acc,
                        amount: acc.amount += actual.amount
                    }))
                    console.log(obj);
                    sumOfItems.push(obj);
                }
            })
            return sumOfItems
        }
        

    }

    const calculateFinalPrice = () => {

    }

    const getTotalFromProducts = (products: any[],amountVisual: AmountType[]) => {
        amountVisual.forEach((amount,index) =>{
            if(amount.ID === products[index].id){
                if(amount.amount >0){
                    //products[index].price * amount.amount;
                }
            }
            
        })
        return 10000000;
    }

    const getPriceForCemento = () =>{
        amountVisual.forEach(amount => {
            if(amount.shipping_class === "cemento"){
                return amount.amount;
            }
        })
    }
    console.log(getProductWithItems(amountVisual));

    return (
<section className='PriceCalculator'>
    { scriptLoaded && (<MapDistance totalProducts={getProductWithItems(amountVisual) || []} showDistance={showDistance} setShowDistance={setShowDistance}></MapDistance>)}
</section>
);
}