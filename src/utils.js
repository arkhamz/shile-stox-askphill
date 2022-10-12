import slide1 from "./assets/slidepic-1.webp"
import slide2 from "./assets/slidepic-2.webp"
import slide3 from "./assets/slidepic-3.webp"
import slide4 from "./assets/slidepic-4.webp"
import slide5 from "./assets/slidepic-5.webp"
import slide6 from "./assets/slidepic-6.webp"
import slide7 from "./assets/slidepic-7.webp"
import {v4 as uuidv4} from "uuid";


// export const slides = [slide1,slide2,slide3,slide4,slide3,slide4,slide5,slide6,slide7];


export const slides = [
    {id:uuidv4(),src: slide1, caption: "Dagelijks"},
    {id:uuidv4(),src: slide2, caption: "Sport"},
    {id:uuidv4(),src: slide3, caption: "Wandelen"},
    {id:uuidv4(),src: slide4, caption: "Reizen"},
    {id:uuidv4(),src: slide5, caption: "Herstellen"},
    {id:uuidv4(),src: slide6, caption: "Medisch"},
    {id:uuidv4(),src: slide7, caption: "Skien"}
]

// array of data objects for each accordion
// Will use 25 products as a default for each sub-menu, 
export const menuData = [
    {id:uuidv4(),caption:"Daily",submenu:["DAMES", "HEREN"]},
    {id:uuidv4(),caption: "Sports",submenu:["SPORT SOCKS","RUNNING SOCKS","HOCKEY SOCKS","SKI SOCKS","FLIGHT SOCKS", "HIKING SOCKS", "WORK SOCKS" ]},
    {id:uuidv4(),caption:"Travelling",submenu:["DAMES", "HEREN"]},
    {id:uuidv4(),caption: "Medical",submenu:["DAMES", "HEREN"]},
]

