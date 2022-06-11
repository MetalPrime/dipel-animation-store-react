import * as React from 'react';
import './Filter.css';
import todoIcon from '../../Resources/todoIcon.svg';
import acabadosIcon from '../../Resources/acabadosIcon.svg';
import aceroIcon from '../../Resources/aceroIcon.svg';
import cementoIcon from '../../Resources/cementoIcon.svg';
import ladrillosIcon from '../../Resources/ladrillosIcon.svg';
import maderaIcon from '../../Resources/maderaIcon.svg';
import { useState } from 'react';

interface Filter {
    products: any[],
    setCopyProducts: React.Dispatch<React.SetStateAction<any[]>>

}

export const Filter: React.FC<Filter> = ({products,setCopyProducts}) => {

    let [isSelected, setIsSelected] = useState<"todos" | "cemento" | "acabados" | "madera" | "acero" | "ladrillos">("todos");
    let [isActive, setIsActive] = useState<boolean>(false);


    const handleFilter = (productItem: "todos" | "cemento" | "acabados" | "madera" | "acero" | "ladrillos") => {
        let productsCopy = [...products];

        if (productItem === "todos") {
            productsCopy = [...products];
            setIsSelected(productItem);

        }
        else {
            productsCopy = products.filter(product => product.shipping_class === productItem);
            setIsSelected(productItem);

        }
        setCopyProducts(productsCopy);

    }

    const handleDisplay = () => {
        if(isActive){
            setIsActive(false);
        }  else {
            setIsActive(true);
        }
    }

    return (
        <section className="ProductSelection_filters" onClick={handleDisplay}>
            { isActive && <div className="ProductSelection_filters_container">
                <button className={isSelected === "todos" ? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={() => {
                    handleFilter("todos");
                }}>
                    <img src={todoIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                    <p className="ProductSelection_filter_text">Todos</p>
                </button>
                <button className={isSelected === "acero" ? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={() => {
                    handleFilter("acero");
                }}>
                    <img src={aceroIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                    <p className="ProductSelection_filter_text">Acero</p>
                </button>
                <button className={isSelected === "ladrillos" ? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={() => {
                    handleFilter("ladrillos");
                }}>
                    <img src={ladrillosIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                    <p className="ProductSelection_filter_text">Ladrillos</p>
                </button>
                <button className={isSelected === "madera" ? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={() => {
                    handleFilter("madera");
                }}>
                    <img src={maderaIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                    <p className="ProductSelection_filter_text">Madera</p>
                </button>
                <button className={isSelected === "acabados" ? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={() => {
                    handleFilter("acabados");
                }}>
                    <img src={acabadosIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                    <p className="ProductSelection_filter_text">Acabados</p>
                </button>
                <button className={isSelected === "cemento" ? "ProductSelection_filter  ProductSelection_filter-1 " : "ProductSelection_filter"} onClick={() => {
                    handleFilter("cemento");
                }}>
                    <img src={cementoIcon} alt="img_filter_btn" className="ProductSelection_filter_img" />
                    <p className="ProductSelection_filter_text">Cemento</p>
                </button>
            </div>}
            {
                !isActive && <div className="ProductSelection_filters_container ProductSelection_filters_container--1">
                    <h1 className="ProductSelection_filter_title">Filtros</h1>
                </div>
            }
            

        </section>
    );
}