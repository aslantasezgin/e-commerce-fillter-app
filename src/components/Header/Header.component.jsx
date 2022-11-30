import React, { useState } from "react";
import "./Header.styles.css"


const Menu = [
    {
       menu_id:0, 
       menu_title:"Home",
       menu_link:"#", 
    },
    {
        menu_id:1, 
        menu_title:"About Us",
        menu_link:"#", 
     },
     {
        menu_id:2, 
        menu_title:"Categories",
        menu_link:"#", 
     },

     {
        menu_id:3, 
        menu_title:"Contact",
        menu_link:"#", 
     },
]



const Header = () => {

    const [basketCount, setBasketCount] = useState(0)


 return(   <header>
    <div className="container-flex">
        <div className="logo-box"><h2>BUTIQUE</h2> </div>
        <div className="nav-list">
        <ul>
            {Menu.map((items) => {
                return <li key={items.menu_id}><a href={items.menu_link}>{items.menu_title} </a> </li>
            })}
        </ul>

        </div>
        <div className="basket"> 
        <span className="basketIcon"><i class="fa-solid fa-basket-shopping"></i>  <span className="basketCount"> {basketCount} </span></span>
        </div>

        </div>
    </header>

)
}


export default Header