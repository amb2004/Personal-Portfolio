import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';



const Intro= () =>{

    const transition= {duration: 2, type: 'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white':''}}>Hy! I Am</span>
                    <span>Aryan Baheti</span>
                    <span>Full Stack Web Developer, with an experience in web designing and development, producing the Quality work.</span>
                </div>

            <button className="button i-button">Hire me</button>

            <div className="i-icons">
                <a href="https://github.com/amb2004?tab=repositories"><img src={Github} alt="github-image" /></a>
                <a href="https://www.linkedin.com/in/aryan-baheti-166a17231/"><img src={LinkedIn} alt="linkedin-image" /></a>
                <a href="https://www.instagram.com/aryan__baheti/"><img src={Instagram} alt="instagram-image" /></a>
                
            </div>


            </div>


            <div className="i-right">
                <img src={Vector1} />
                <img src={Vector2} />
                <img src={boy} />

                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:"-24%"}}
                transition={transition}
                src={glassesimoji}
                alt="glasses" 
                />


                <motion.div 
                initial={{top:'-4%', left:'74%'}}
                whileInView={{left:'59%'}}
                transition={transition}
                style={{top:'-2%' ,left:'59%'}}
                className="floating-div"
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>


                <motion.div 
                initial={{left:'9rem', top:'18rem'}}
                whileInView={{left:'2rem'}}
                transition={transition}
                style={{top: '18rem', left:'2rem'}}
                className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1='Coding' txt2='Enthusiast' />
                </motion.div>

                {/* blur div */}
                <div className="blur" style={{background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height:'11rem', left:'-9rem'}}></div>

            </div>
        </div>
    )

}

export default Intro;