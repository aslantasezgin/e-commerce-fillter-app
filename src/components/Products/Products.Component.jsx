import React from "react";
import { useContext } from "react";
import { Context } from "../../App";
import './Products.Styles.css';


const Products = ({productList, productName}) => {

    const {basketCount,setBasketCount} = useContext(Context)


    return(
        <div className="products">

       
            {productList.map((productItem) => {
                if(productName == productItem.categoryTitle){
                    return (<div key={productItem.id} className="product-card">
                    <div className="product-img"> <img src={productItem.img}></img></div>
                     <div className="product-text">
                     <h4>{productItem.name} <span>{productItem.categoryTitle}</span> </h4>
                    
                     <button onClick={() => {
                        setBasketCount(basketCount +1 )
                       
                     }} >Add Basket </button></div>
                 </div>) 
                } else if( productName == "All"){
                    return (<div  key={productItem.id} className="product-card">
                    <div className="product-img"> <img src={productItem.img}></img></div>
                     <div className="product-text">
                     <h4>{productItem.name}  </h4>
                     <span>{productItem.categoryTitle}</span>
                     <button onClick={() => {
                        setBasketCount(basketCount +1 )
                      
                     }} >Add Basket </button></div>
                 </div>) 
                }
              
            })}
      

        </div>
    )
}


export default Products