import { useState } from "react"
import {BsChevronDown,BsChevronUp} from "react-icons/bs"
import {v4 as uuidv4} from "uuid";
import "./MenuAccordion.css"
import {MenuFade} from "./Fade";


//Takes category data as prop and returns accordion

export default function MenuAccordion({data}){

    const {caption, submenu} = data;

    const [open,setOpen] = useState(false);

    function toggleOpen(e){
        setOpen(!open);
    }

    return (
        <article className="accordion-container">
            <header onClick={toggleOpen}>
                <h2>{caption}</h2>
                <button className="accordion-btn" onClick={toggleOpen}>{open ? <BsChevronUp/> : <BsChevronDown/>}</button>
            </header>
            {open && (
                
                <MenuFade className={open? "submenu menu-open" : "submenu"}>
                    {submenu && submenu.map(function(i){
                        return <div className="submenu-content" key={uuidv4()}>
                            <a href="#">{i}</a>
                            <span>25 products</span>
                        </div>
                    })}

                </MenuFade>
                
            )}

        </article>
    )
}