import React from "react";
import './Footer.css';
import Wave from "../../img/wave.png"

import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import GitHub from '@iconscout/react-unicons/icons/uil-github';


const Footer= ()=>{
    return (
        <div className="footer">
            <img src={Wave} style={{width:'100%'}}/>

            <div className="f-content">
                <span>aryanbaheti096@gmail.com</span>
                <div className="f-icons">
                    <Insta color="white" size='3rem'   />
                    <LinkedIn color="white" size='3rem'  />
                    <GitHub color="white" size='3rem'  />
                </div>
            </div>

        </div>
    )
}

export default Footer;