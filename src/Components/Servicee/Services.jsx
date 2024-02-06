import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';


const Services =() =>{

    const transition= {duration: 1, type: 'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return(
        <div className="services" id='Services'>

            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode?'white':''}}>My Awesome</span>
                <span>services</span>
                <span>
                I specialize in full-stack web development, creating seamless and responsive applications
                <br/>
                with expertise in both front-end and back-end technologies.
                </span>

                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
             </div>


             {/* right side */}
             <div className="cards">
                
                <motion.div 
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}
                style={{left:'14rem' }}>
                    <Card
                        emoji= {HeartEmoji}
                        heading={'Languages'}
                        detail= {"C, C++,JAVA, SQL,HTML,CSS"}
                    />
                </motion.div>

                {/* second card */}

                <motion.div 
                initial={{left:'1rem'}}
                whileInView={{left:'-4rem'}}
                transition={transition}
                style={{left:'-4rem' ,top:'12rem'}}>
                    <Card
                        emoji= {Glasses}
                        heading={'Developer'}
                        detail= {"JS ,React.js, MongoDb, PostgreSQL, Node.js"}
                    />
                </motion.div>

                {/* third card */}

                <motion.div 
                initial={{left:'25rem'}}
                whileInView={{left:'12rem'}}
                transition={transition}
                style={{top:'19rem', left:'12rem' }}>
                    <Card
                        emoji= {Humble}
                        heading={'UI/UX'}
                        detail= {"I am a full stack web developer, (MERN stack)"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>


             </div>


        </div>
    )
}

export default Services;