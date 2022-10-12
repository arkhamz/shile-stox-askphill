import "./Menu.css"
import CategorySlider from "./CategorySlider"
import { menuData } from "../utils"
import MenuAccordion from "./MenuAccordion"
  
export default function Menu(){

    return (
        <div className="menu-container">
            <CategorySlider className="testing"/>
            <div className="accordions">
                {menuData && menuData.map(function(item,index){
                    return <MenuAccordion key={item.id} data={item} />
                })}
            </div>
        </div>
    )
}