import * as React from 'react';
import { useState, useEffect } from 'react';
import { MapDistance } from '../../Components/MapDistance/MapDistance';
import { AmountType } from '../../Types/AmountVisual';
import { Direction } from '../../Types/Direction';

import './PriceCalculator.css';

interface PriceCalculator {
    scriptLoaded: boolean;
    products: any[];
    amountVisual: AmountType[];
}

export type Flete = {
    precio: string,
    tipo: string,
    estado: string,
    condition: string,
}

export type AmountProduct = {
    info: nameProduct[],
    type: string,
    total: number,
}

export type nameProduct = {
    name: string,
    price: number,
    amount: number,
}

export const PriceCalculator: React.FC<PriceCalculator> = ({ scriptLoaded, products, amountVisual }) => {

    const [totalPrice, setTotalPrice] = useState<number>(0);

    const [fletes, SetFletes] = useState<Flete[]>([]);
    const [amountProducts, SetAmountProducts] = useState<AmountProduct[]>([])
    const [showDistance, setShowDistance] = useState<Direction[]>([]);

    const getProductWithItems = (products: AmountType[]) => {
        let sumOfItems: AmountType[] = [];
        if (scriptLoaded) {
            products.forEach(product => {
                if (sumOfItems.some(item => item.shipping_class === product.shipping_class)) {

                } else {
                    let similarProducts = products.filter(pro => { if (pro.shipping_class === product.shipping_class) { return pro } });
                    let obj = similarProducts.reduce((acc, actual) => ({
                        ...acc,
                        amount: acc.amount += actual.amount
                    }))
                    sumOfItems.push(obj);
                }
            })
            return sumOfItems
        }


    }


    const getTotalPriceFromShippingClass = (shippingClass: string) => {

        let productsByShipping = products.filter(produ => produ.shipping_class === shippingClass);
        let amountByShipping = amountVisual.filter(product => product.shipping_class === shippingClass);

        let item : AmountProduct = {
            info: [],
            type: '',
            total: 0,
        };

        let productWithPriceAndAmount = productsByShipping.map((product, index) => {
            if (product.id === amountByShipping[index].ID) {
                item.type = amountByShipping[index].shipping_class;
                if(amountByShipping[index].amount){
                    if(item.info.some(ite => ite.name === product.name)){

                    } else {
                        item.info.push({name:product.name, amount: amountByShipping[index].amount, price: product.price})
                    }
                    
                }
                
                return { ...product, ...amountByShipping[index] }
            } else {
                return { ...product }
            }
            
        });
        
        console.log(item);
        console.log({amountProducts})
        let total = productWithPriceAndAmount.reduce((acc, current) => (current.price * current.amount) + acc, 0) as number;
        item.total = total;
        return {total,item};

    }

    const getTotalPriceFromProducts = (products: any[], amountVisual: AmountType[]) => {
        let totalVlaue = 0;
        let productsWithAmount = amountVisual.filter(product => product.amount > 0);

        productsWithAmount.forEach((amount, index) => {
            if (amount.ID === products[index].id) {
                totalVlaue += (products[index].price * amount.amount);

            }

        })
        return totalVlaue;
    }


    const getTotalPriceFromTravel = () => {
        let price = 0;
        if (showDistance.length > 0) {
            showDistance.forEach((distance) => {
                price += Number.parseInt(distance.distance.replace(" km", "")) * 45000;
            })
        }
        return price;
    }



    const getTotalPriceFromCondition = () => {
        let totalPrice = 0;
        const sumTotalProducts = getProductWithItems(amountVisual);
        let copyArraay: AmountProduct[];

        sumTotalProducts?.forEach(product => {
            switch (product.shipping_class) {
                case 'acabados':
                    let totalPriceOfAllAcabados = getTotalPriceFromShippingClass("acabados");
                    let fleteAcabadis: Flete ={
                        precio: '',
                        tipo: '',
                        estado: '',
                        condition: ''
                    };
                    fleteAcabadis.tipo = "acabados"
                    if (totalPriceOfAllAcabados.total > 1000000) {
                        totalPrice += 130000;
                        
                    } else {
                        totalPrice += 1000000;
                    }

                    //
                     copyArraay = amountProducts;
                    if(amountProducts.some(item => item.type === "acabados")){
                        
                    } else {
                        copyArraay.push(totalPriceOfAllAcabados.item);
                    }
                    
                    SetAmountProducts(copyArraay);
                    //

                    break;
                case 'madera':
                    let totalPriceOfAllWood = getTotalPriceFromShippingClass("madera");
                    
                    if (totalPriceOfAllWood.total > 500000) {
                        totalPrice += 80000;
                    } else {
                        totalPrice += 500000;
                    }
                    copyArraay = amountProducts;
                    if(amountProducts.some(item => item.type === "madera")){
                       
                    } else {
                        copyArraay.push(totalPriceOfAllWood.item);
                    }
                    
                    SetAmountProducts(copyArraay);

                    break;
                case 'ladrillos':
                    let totalPriceOfAllProducts = getTotalPriceFromShippingClass("ladrillos");
                    
                    if (totalPriceOfAllProducts.total > 1500000) {
                        totalPrice += 200000;
                    } else {
                        totalPrice += 1500000;
                    }
                    copyArraay = amountProducts;
                    if(amountProducts.some(item => item.type === "ladrillos")){
                        
                    } else {
                        copyArraay.push(totalPriceOfAllProducts.item);
                    }
                    
                    SetAmountProducts(copyArraay);

                    break;
                case 'cemento':
                    let totalPriceOfAllCement = getTotalPriceFromShippingClass("cemento");
                    if (product.amount > 50) {
                        totalPrice += 0;
                    } else {
                        totalPrice += 100000
                    }
                    copyArraay = amountProducts;
                    if(amountProducts.some(item => item.type === "cemento")){
                      
                    } else {
                        copyArraay.push(totalPriceOfAllCement.item);
                    }
                    
                    SetAmountProducts(copyArraay);

                    break;
                case 'acero':
                    //product.weight>1500?totalPrice+=150000: 2800000;
                    break;
            }
        })

        return totalPrice;
    }


    useEffect(() => {
        
        getTotalPriceFromCondition();
    },[])


    console.log({amountProducts});

    const calculateFinalPrice = () => {
        if (showDistance.length > 0) {
            setTotalPrice(getTotalPriceFromProducts(products, amountVisual) + getTotalPriceFromCondition());
        } else {
            setTotalPrice(getTotalPriceFromProducts(products, amountVisual) + getTotalPriceFromCondition() + getTotalPriceFromTravel());
        }
    }

    useEffect(() => {
        calculateFinalPrice();
       

    }, [showDistance])

    return (
        <section className='PriceCalculator'>
            {scriptLoaded && (<MapDistance totalProducts={getProductWithItems(amountVisual) || []} showDistance={showDistance} setShowDistance={setShowDistance}></MapDistance>)}
            <article className="PriceCalculator__Prices">

                <article className="PriceCalculator__Price">
                    <h2>Total de precio de productos</h2>
                    <div className="PriceCalculator__Price__section">
                        <p className="PriceCalculator__Price__names">Nombre</p>
                        <p className="PriceCalculator__Price__names">Cantidad</p>
                        <p className="PriceCalculator__Price__names">Precio</p>
                    </div>
                    {
                        amountProducts.length > 0 && amountProducts.map((amountProduct =>
                            <section key={amountProduct.type} >
                                {amountProduct.info.map((info) =>
                                info.amount && <div className="PriceCalculator__Price__section" key={info.name}>
                                    <p>{info.name}</p>
                                    <p>{info.amount}</p>
                                    <p>{info.price}</p>
                                </div>)}
                                { amountProduct.total > 0 && <h3>Total: {amountProduct.total}</h3>} 
                            </section>
                            ))
                    }
                </article>
                <article className="PriceCalculator__Price">
                    <h2>Total de precio de fletes</h2>
                    <div>

                    </div>
                    {
                        fletes.length > 0 && fletes.map(flete =>
                            <section key={flete.tipo}>
                                <p>{flete.tipo}</p>
                                <p>Aplica: {flete.estado}</p>
                                <p>Valor: {flete.precio}</p>
                            </section>
                        )
                    }
                </article>
                <article className="PriceCalculator__Price">
                    <h2>Total de precio de transporte</h2>
                    {showDistance.length > 0 && showDistance.map((d) =>


                        <section key={d.shipping_class} className="PriceCalculator__Price__item">
                            <p>La distancia total es {d.distance}</p>
                            <p>Duración estimada del viaje: {d.duration}</p>
                            <p>Lugar de los insumos {d.place}</p>
                            <p>Productos: {d.shipping_class}</p>
                        </section>
                    )}
                </article>


            </article>
            <article className="PriceCalculator__Total">
                <p>Precio Total:</p>
                <h2>{totalPrice}</h2>
            </article>

        </section>
    );
}
