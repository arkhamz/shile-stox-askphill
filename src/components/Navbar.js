import { useState } from "react";
import logo from "../assets/logo.svg"
import search from "../assets/search.svg"
import bag from "../assets/bag.svg"
import "./Navbar.css"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import Menu from "./Menu";


export default function Navbar(){

    const [toggled,setToggled] = useState(false);

    function handleClick(){
        setToggled(!toggled);
    }

    return (
        <>
        <nav>
            <ul className="nav-list">
                <div className="nav-brand-toggle">
                    <div className="nav-toggle">
                        { toggled ? <AiOutlineClose onClick={handleClick}/> : <AiOutlineMenu onClick={handleClick} />}
                    </div>
                    <div className="nav-brand">
                        <img src={logo} alt="logo unloaded" />
                    </div>
                </div>
                <li className="nav-search">
                <img src={search} alt="search unloaded" />
                </li>
                <li className="nav-bag">
                <img src={bag} alt="bag unloaded" />
                </li>
            </ul>
        </nav>
        {toggled && <Menu/>}
        </>
    )
}