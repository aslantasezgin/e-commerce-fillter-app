import React from "react";
import './Sidebar.Styles.css';

const Sidebar = ({categories}) => {
    return(
        <div className="sidebar">
            <ul>
              {categories.map((categorie) => {
                return (<li key={categorie.id} onClick={() => {
                    console.log(categorie.title)
                }}> {categorie.title} </li> )
              })}


            </ul>

        </div>
    )
}

export default Sidebar