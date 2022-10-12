import "./CategorySlider.css"
import { slides } from "../utils"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import {SpringFade} from "./Fade";


export default function CategorySlider(){
    // testing

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
                    <SpringFade>
                        <div  className="slidepic-container">
                            <img className="slidepic" src={item.src} alt="load error" />
                            <h2 className="slide-caption">{item.caption}</h2>
                        </div>
                    </SpringFade>
                 
                 </a>
                    </SwiperSlide> 
                } else {
                    return <SwiperSlide  key={item.id}>
                   <SpringFade>
                   <div  className="slidepic-container">
                    <img className="slidepic" src={item.src} alt="load error" />
                    <h2 className="slide-caption">{item.caption}</h2>
                </div>
                   </SpringFade>
                    </SwiperSlide>
                }
            })}

        </Swiper>
    )
}
