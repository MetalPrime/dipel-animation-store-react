import * as React from 'react';
import './ProductSelection.css';
import { Animation } from '../../Components/Animation/Animation';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import imgBackground from '../../Resources/backAnimation.jpg';

import { AmountType } from '../../Types/AmountVisual';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Filter } from '../../Components/Filter/Filter';

export type ProductSelection = {
    scriptLoaded: boolean,
    amountVisual: AmountType[],
    products: any[],
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>
}

export const ProductSelection: React.FC<ProductSelection> = ({ scriptLoaded, amountVisual, products, setAmountVisual }) => {

    let [copyProducts, setCopyProducts] = useState(Array.from(products));

    useEffect(() => {
        setCopyProducts(products);
    }, [products]);    

    return <section className="ProductSelection">
        <article className="ProductSelection_animation" >
            {scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}
            {scriptLoaded && <Filter products={products} setCopyProducts={setCopyProducts}></Filter>
            }
        </article>
        <Carousel
            additionalTransfrom={0}
            arrows
            
            autoPlay
            autoPlaySpeed={5000}
            centerMode={true}
            className=""
            containerClass="container-with-dots prueba_container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 0
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            showDots={true}
            sliderClass="prueba"
            slidesToSlide={1}
            swipeable
        >
            {
                scriptLoaded && copyProducts.map(product => {
                    return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id} shipping_class={product.shipping_class} price={product.price}></Product>
                })
            }
        </Carousel>
        <article className="ProductSelection_products">

        </article>

        <article className="Calculate">
            <button><Link to={`/calculate`}>Continuar con la compra</Link></button>
        </article>

    </section>
}