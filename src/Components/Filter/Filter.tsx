import * as React from 'react';
import './Filter.css';
import todoIcon from '../../Resources/todoIcon.svg';
import acabadosIcon from '../../Resources/acabadosIcon.svg';
import aceroIcon from '../../Resources/aceroIcon.svg';
import cementoIcon from '../../Resources/cementoIcon.svg';
import ladrillosIcon from '../../Resources/ladrillosIcon.svg';
import maderaIcon from '../../Resources/maderaIcon.svg';
import shoppingIcon from '../../Resources/shopping-cart.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

interface IFilter {
    products: any[],
    setCopyProducts: React.Dispatch<React.SetStateAction<any[]>>

}

export const Filter: React.FC<IFilter> = ({ products, setCopyProducts }) => {

    let [isSelected, setIsSelected] = useState<"todos" | "cemento" | "acabados" | "madera" | "acero" | "ladrillos">("todos");

    const [price, setPrice] = React.useState('');
    const handleChangePrice = (event: SelectChangeEvent) => {
        setPrice(event.target.value as string);
      };

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

    return <section className="ProductSelection_options">
        <section className="ProductSelection_filters_resume">
            <article>
                <label>Order by price</label>
                <Select
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={handleChangePrice}
                    sx={{paddingTop: "0", paddingBottom: "0", marginRight: "1rem", marginLeft: "0.5rem", minWidth: "100px"}}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <label>Order by available</label>
                <Select
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"Price"}
                    sx={{paddingTop: "0", paddingBottom: "0", minWidth: "100px", marginLeft: "0.5rem", marginRight: "1rem" }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </article>
            <Link to={`/calculate`}><button className='btn_calculate'><img src={shoppingIcon} alt={"cart_icon"} /><p>Continuar con la compra</p></button></Link>
        </section>

        <section className="ProductSelection_filters_container">
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
        </section>



    </section>

}