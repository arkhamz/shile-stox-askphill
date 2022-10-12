import "./CategorySlider.css"
import { slides } from "../utils"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

export default function CategorySlider(){

    return (
        <Swiper
            // spaceBetween={0}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map(function(item,index){
                return <SwiperSlide key={index}>
                   <div  className="slidepic-container">
                    <img className="slidepic" src={item} alt="load error" />
                </div>
                    </SwiperSlide>
            })}

        </Swiper>
    )
}



{/* <div className="slider">
            {slides.map(function(item,index){
                return <div key={index}  className="slidepic-container">
                    <img className="slidepic" src={item} alt="load error" />
                </div>
            })}
        </div> */}