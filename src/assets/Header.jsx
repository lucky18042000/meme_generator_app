import React from "react";
import logo from "../assets/Troll Face.svg"

export default function Header(){
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt="" srcset="" />
            <h3 className="brand">Meme Generator</h3>
            <h4 className="project">React Course - Project 3</h4>
        </nav>
    )
}