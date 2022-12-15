import React,{useState} from "react";

import Products from "../Products/Products.Component";
import Sidebar from "../Sidebar/Sidebar.Component";
import "./MainArea.styles.css";



const Categories = [

    {
        id:0,
        title:"All"
    },

    {
        id:1,
        title:"Man"
    },
    {
        id:2,
        title:"Woman"
    },

    {
        id:3,
        title:"Sweatshirts"
    },

    {
        id:4,
        title:"T-shirts"
    },


    {
        id:5,
        title:"Shoes"
    },

    {
        id:6,
        title:"Bags"
    },

    {
        id:7,
        title:"Accessories"
    },

    {
        id:8,
        title:"Hats"
    }
]


const ProductList = [
    {
        id:0,
        name:"Nike Air",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        categoryTitle:"Shoes"
    },

    {
        id:1,
        name:"Cargo Pants",
        img:"https://contents.mediadecathlon.com/p2399079/k$3c0315b76da88d36521b79d59d716145/sq/250x250/Erkek-Doga-Gozlem-ve-Avcilik-Pantolonu-Yesil-Steppe-300.jpg",
        categoryTitle:"Man"
    },

    {
        id:2,
        name:"White Hat",
        img:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        categoryTitle:"Hats"
    },

    {
        id:3,
        name:"Green Jacket",
        img:"https://cdn.lutvelizade.com.tr/gorseller/ceket-00121-yesil-kadin-ceket.jpg",
        categoryTitle:"Woman"
    },


    {
        id:4,
        name:"Black Sweatshirt",
        img:"https://productimages.hepsiburada.net/s/103/600-800/110000046362294.jpg",
        categoryTitle:"Sweatshirts"
    },

    {
        id:5,
        name:"Balina T-shirt",
        img:"https://cdn.shopify.com/s/files/1/0020/8355/3361/products/THT-236XX_1.jpg?v=1652709349",
        categoryTitle:"T-shirts"
    },

    {
        id:6,
        name:"Earring",
        img:"https://www.zenpirlanta.com/resim/urun/erkek-urunleri/erkek-kupeleri/zen-pirlanta-erkek-kupeleri-3000916780-ER080811-15-114-1622191458-2.jpg",
        categoryTitle:"Accessories"
    },


    {
        id:7,
        name:"Nike Air 7",
        img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        categoryTitle:"Bags"
    },
]




const MainArea = () => {

    const [productItem, setProductItem] = useState("All")
    const changeProductItem = (name) => {
        setProductItem(name)
      }



    return(
     
        <div className="MainArea">
        <div className="container-flex">
        <Sidebar changeProductItem={changeProductItem} categories={Categories}></Sidebar>
        <Products productName={productItem} productList={ProductList}></Products>
       

        </div>
        </div>
      
    )
}

export default MainArea;