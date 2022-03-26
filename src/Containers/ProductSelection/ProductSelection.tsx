import * as React from 'react';
import './ProductSelection.css';
import { Animation } from '../../Components/Animation/Animation';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import imgBackground from '../../Resources/backAnimation.jpg';
import todoIcon from '../../Resources/todoIcon.svg';
import { AmountType } from '../../Types/AmountVisual';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export type ProductSelection = {
    scriptLoaded: boolean,
    amountVisual: AmountType[],
    products: any[],
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>
}

export const ProductSelection: React.FC<ProductSelection> = ({ scriptLoaded, amountVisual, products, setAmountVisual }) => {

    let [copyProducts,setCopyProducts] = useState(products)

    const handleFilter = (productItem: "todos"| "cemento" | "acabados" | "madera" | "acero" | "ladrillos") => {
        let productsCopy = [...products];

        if(productItem === "todos"){
            productsCopy = [...products]
        }

        else {
            productsCopy = products.filter(product => product.shipping_class === productItem);
        }
        setCopyProducts(productsCopy);
    }

    return <section className="ProductSelection">
        <article className="ProductSelection_animation" >
            {scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}
            <section className="ProductSelection_filters">
                <div className="ProductSelection_filters_container">
                    <button className="ProductSelection_filter" onClick={()=>{
                        handleFilter("todos");
                    }}>
                        <img src={todoIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Todos</p>
                    </button>
                    <button className="ProductSelection_filter" onClick={()=>{
                        handleFilter("acero");
                    }}>
                        <img src="" alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Acero</p>
                    </button>
                    <button className="ProductSelection_filter" onClick={()=>{
                        handleFilter("ladrillos");
                    }}>
                        <img src="" alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Ladrillos</p>
                    </button>
                    <button className="ProductSelection_filter" onClick={()=>{
                        handleFilter("madera");
                    }}>
                        <img src="" alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Madera</p>
                    </button>
                    <button className="ProductSelection_filter" onClick={()=>{
                        handleFilter("acabados");
                    }}>
                        <img src="" alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Acabados</p>
                    </button>
                    <button className="ProductSelection_filter" onClick={()=>{
                        handleFilter("cemento");
                    }}>
                        <img src="" alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Cemento</p>
                    </button>
                </div>

            </section>
        </article>

        <article className="ProductSelection_products">
            {
                scriptLoaded && copyProducts.map(product => {
                    return <Product name={product.name} img={product.images[0].src} type={product.type} value={product.price} weight={product.weight} key={product.id} amountVisual={amountVisual} setAmountVisual={setAmountVisual} id={product.id} shipping_class={product.shipping_class} price={product.price}></Product>
                })
            }
        </article>

        <article className="Calculate">
            <button><Link to={`/calculate`}>Continuar con la compra</Link></button>
        </article>

    </section>
}