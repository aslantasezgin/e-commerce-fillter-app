import React from "react";
import { useState } from "react";
import './Sidebar.Styles.css';

const Sidebar = ({categories, changeProductItem}) => {



    return(
        <div className="sidebar">
            <ul>
              {categories.map((categorie) => {
                return (<li key={categorie.id} onClick={() => {
                  changeProductItem(categorie.title)
                
                }}> {categorie.title} </li> )
              })}

              
            
            </ul>

        </div>
    )
}

export default Sidebar