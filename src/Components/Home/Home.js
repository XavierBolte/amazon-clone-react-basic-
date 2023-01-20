import { ImageList } from "@mui/material";
import { useEffect } from "react";
import "./Home.css"
import Products from "../Products/Products";

const Home = () => {
    useEffect(()=> Slider(0), []);
    return (
        <>
            <div className="home">
                <div className="homecontainer">
                    <div className="homeSliderContainer">
                    
                        <div className="homeSlide">
                            <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg" alt="Amitab_img" />
                        </div>

                        <div className="homeSlide">
                            <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" alt="Amitab_img" />
                        </div>

                        <div className="homeSlide">
                            <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg" alt="Amitab_img" />
                        </div>

                        <div className="homeSlide">
                            <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg" alt="Amitab_img" />
                        </div>
                        
                    </div>

                    {/* Home Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                    </div>

                    {/* Second Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                    </div>

                    {/* Third Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                    </div>

                    {/* Forth Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                    </div>

                </div>
            </div>
        </>
    );
};
//For The Slider
function Slider(Counter) {
    const Slides = document.querySelectorAll(".homeImg")
    
    Slides.forEach((slide , index) => {
        if(index !== Counter) {
            slide.style.visibility = 'hidden';
            // eslint-disable-next-line no-template-curly-in-string
            slide.classList.add('image-${index}')
        }
    });
    moveCaruousal(Counter, Slides, Slides.length)
}

function moveCaruousal(Counter, slides , len){
    if(slides) {
        if(Counter >= len - 1) Counter = 0;
        else Counter += 1; 

        slides.forEach((slide, index)=> {
            if(index === Counter) {
                slide.style.visibility = "visible";
            }else {
                slide.style.visibility = "hidden";
            }
        });
    }
    setTimeout(() => {
        moveCaruousal(Counter, slides, len)
    }, 4000);
}
export default Home;
