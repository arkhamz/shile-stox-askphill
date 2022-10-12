import "./Home.css"
import homevid from "../assets/home-video.webm"

export default function Home(){

   return (
        <>
        <div className="hero">
         <h1 style={{color: "white"}}>De sokken die je fit en vitaal houden</h1>
            <div className="hero-links">
              <a href="#"><span>Sport</span></a>
              <a href="#"><span>Reizen</span></a>
              <a href="#"><span>Dagelijks</span></a>
              <a href="#"><span>Medisch</span></a>
            </div>
          </div> 

          <div className="home-vid">
              <video loop autoPlay muted >
                <source  src={homevid} />
              </video>
            </div>
        </> 
   )
}


