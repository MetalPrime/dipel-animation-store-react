import * as React from 'react';
import './ProductSelection.css';
import { Animation } from '../../Components/Animation/Animation';
import { Product } from '../../Components/Product/Product';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import imgBackground from '../../Resources/backAnimation.jpg';
import todoIcon from '../../Resources/todoIcon.svg';
import acabadosIcon from '../../Resources/acabadosIcon.svg';
import aceroIcon from '../../Resources/aceroIcon.svg';
import cementoIcon from '../../Resources/cementoIcon.svg';
import ladrillosIcon from '../../Resources/ladrillosIcon.svg';
import maderaIcon from '../../Resources/maderaIcon.svg';
import { AmountType } from '../../Types/AmountVisual';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export type ProductSelection = {
    scriptLoaded: boolean,
    amountVisual: AmountType[],
    products: any[],
    setAmountVisual: React.Dispatch<React.SetStateAction<AmountType[]>>
}

export const ProductSelection: React.FC<ProductSelection> = ({ scriptLoaded, amountVisual, products, setAmountVisual }) => {

    let [copyProducts,setCopyProducts] = useState(products);
    let [isSelected, setIsSelected] = useState<"todos"|"cemento"|"acabados"|"madera"|"acero"|"ladrillos">("todos");

    useEffect(() => {
        setCopyProducts(products);
    },[products])
    
    const handleFilter = (productItem: "todos"| "cemento" | "acabados" | "madera" | "acero" | "ladrillos") => {
        let productsCopy = [...products];

        if(productItem === "todos"){
            productsCopy = [...products];
            setIsSelected(productItem);

        }
        else {
            productsCopy = products.filter(product => product.shipping_class === productItem);
            setIsSelected(productItem);

        }
        setCopyProducts(productsCopy);
        
    }

    return <section className="ProductSelection">
        <article className="ProductSelection_animation" >
            {scriptLoaded && <Animation amountVisual={amountVisual}></Animation>}
            {scriptLoaded && <section className="ProductSelection_filters">
                <div className="ProductSelection_filters_container">
                    <button className={isSelected === "todos"? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={()=>{
                        handleFilter("todos");
                    }}>
                        <img src={todoIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Todos</p>
                    </button>
                    <button className={isSelected === "acero"? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={()=>{
                        handleFilter("acero");
                    }}>
                        <img src={aceroIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Acero</p>
                    </button>
                    <button className={isSelected === "ladrillos"? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={()=>{
                        handleFilter("ladrillos");
                    }}>
                        <img src={ladrillosIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Ladrillos</p>
                    </button>
                    <button className={isSelected === "madera"? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={()=>{
                        handleFilter("madera");
                    }}>
                        <img src={maderaIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Madera</p>
                    </button>
                    <button className={isSelected === "acabados"? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={()=>{
                        handleFilter("acabados");
                    }}>
                        <img src={acabadosIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Acabados</p>
                    </button>
                    <button className={isSelected === "cemento"? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={()=>{
                        handleFilter("cemento");
                    }}>
                        <img src={cementoIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                        <p className="ProductSelection_filter_text">Cemento</p>
                    </button>
                </div>

            </section>
}
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