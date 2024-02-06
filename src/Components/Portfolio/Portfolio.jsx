import React from "react";
import './Portfolio.css';
import {Swiper,SwiperSl, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Slidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Todo from "../../img/todo.png";
import Keep from "../../img/keep1.png";
import Simon from "../../img/simon.png";
import Wcountry from "../../img/wcountry.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Portfolio= () =>{

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return (
        <div className="portfolio" id="Portfolio">

            {/* heading */}
            <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                

                <SwiperSlide>
                    <img src={Todo} alt="" />
                </SwiperSlide>

            
                <SwiperSlide>
                 <a href="https://github.com/amb2004/World-Capital-Quiz"><img src={Wcountry} alt="" /></a>   
                </SwiperSlide>

                <SwiperSlide>
                <a href=""> <img src={Simon} alt="ecommerce" /></a>
                   
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                <img className="tat" src={Keep} alt="slide" />
                </SwiperSlide>

            </Swiper>




        </div>
    )
}

export default Portfolio;