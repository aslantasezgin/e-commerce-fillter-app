import React from "react";
import './Products.Styles.css';


const Products = ({productList}) => {
    return(
        <div className="products">

       
            {productList.map((productItem) => {
                return (<div className="product-card">
                   <div className="product-img"> <img src={productItem.img}></img></div>
                    <div className="product-text">
                    <h4>{productItem.name} </h4>
                    <h3><span>Category</span> {productItem.categoryTitle} </h3>
                    <button>Add Basket </button></div>
                </div>)
            })}
      

        </div>
    )
}


export default Products