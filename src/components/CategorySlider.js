import "./CategorySlider.css"
import { slides } from "../utils"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";



export default function CategorySlider(){

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={2}
            style={{padding: "20px"}}
        >
            {slides.map(function(item,index){

                if(index === 2){
                    return <SwiperSlide  key={item.id}>
                 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                 <div  className="slidepic-container">
                    <img className="slidepic" src={item.src} alt="load error" />
                    <h2 className="slide-caption">{item.caption}</h2>
                </div>
                 </a>
                    </SwiperSlide> 
                } else {
                    return <SwiperSlide  key={item.id}>
                   <div  className="slidepic-container">
                    <img className="slidepic" src={item.src} alt="load error" />
                    <h2 className="slide-caption">{item.caption}</h2>
                </div>
                    </SwiperSlide>
                }
            })}

        </Swiper>
    )
}
