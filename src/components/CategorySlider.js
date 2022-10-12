import "./CategorySlider.css"
import { slides } from "../utils"

export default function CategorySlider(){

    
    return (
        <div className="slider">
            {slides.map(function(item,index){
                return <div key={index}  className="slidepic-container">
                    <img className="slidepic" src={item} alt="load error" />
                </div>
            })}
        </div>
    )
}