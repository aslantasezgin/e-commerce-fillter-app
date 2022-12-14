import React from "react";
import Products from "../Products/Products.Component";
import Sidebar from "../Sidebar/Sidebar.Component";
import "./MainArea.styles.css";


const Categories = [
    {
        id:0,
        title:"Man"
    },
    {
        id:1,
        title:"Woman"
    },

    {
        id:2,
        title:"Sweatshirts"
    },

    {
        id:3,
        title:"T-shirts"
    },


    {
        id:4,
        title:"Shoes"
    },

    {
        id:5,
        title:"Bags"
    },

    {
        id:6,
        title:"Accessories"
    },

    {
        id:7,
        title:"Hats"
    }
]


const ProductList = [
    {
        id:0,
        name:"Nike Air 7",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        categoryTitle:"Shoes"
    },

    {
        id:2,
        name:"Nike Air 7",
        img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        categoryTitle:"Shoes"
    },
]


const MainArea = () => {
    return(
        <div className="MainArea">
        <div className="container-flex">
        <Sidebar categories={Categories}></Sidebar>
        <Products productList={ProductList}></Products>

        </div>
        </div>
    )
}

export default MainArea;