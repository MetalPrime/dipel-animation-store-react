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

    const getTotalPriceFromProducts = (products: any[],amountVisual: AmountType[]) => {
        let  totalVlaue = 0;
        let productsWithAmount = amountVisual.filter(product => product.amount>0);

        productsWithAmount.forEach((amount,index) =>{
            if(amount.ID === products[index].id){
                    totalVlaue +=  (products[index].price * amount.amount);
                
            }
            
        })
        return totalVlaue;
    }

    console.log(getTotalPriceFromProducts(products,amountVisual));

    const getTotalPriceFromTravel = () =>{

    }

    const getTotalPriceFromCondition = () => {
        let totalPrice = 0;
        const sumTotalProducts = getProductWithItems(amountVisual);

        sumTotalProducts?.forEach(product => {
            switch(product.shipping_class){
                case 'acabados':
                    break;
                case 'madera':
                    break;
                case 'ladrillos':
                    const productsLadrillos = products.filter(produ => produ.shipping_class === 'ladrillos');
                    console.log(productsLadrillos);
                    //productsLadrillos.reduce((acc,current) =>  Number(acc.price)+=current.price,0);
                    console.log(productsLadrillos);
                    break;
                case 'cemento':
                    if(product.amount>50){
                        totalPrice+=0;
                    } else{
                        totalPrice+=50000
                    }
                    break;
                case 'acero':
                    //product.weight>1500?totalPrice+=150000: 2800000;
                    break;
            }
        })
    }

    console.log(getTotalPriceFromCondition());
    console.log(getProductWithItems(amountVisual));

    return (
<section className='PriceCalculator'>
    { scriptLoaded && (<MapDistance totalProducts={getProductWithItems(amountVisual) || []} showDistance={showDistance} setShowDistance={setShowDistance}></MapDistance>)}
</section>
);
}