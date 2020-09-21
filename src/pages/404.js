import React from 'react';
import { motion } from "framer-motion";
import {isMobile} from "react-device-detect";
import styled from 'styled-components';

const Styles = styled.div`

.background{
    background: linear-gradient(180deg, #05f, #09f);
  width: 100vw; 
  height: 100vh;
}

.container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100vw; 
  height: 100vh;
}


.toptext{
  
  ${isMobile ? 
    `
    top: calc(12%);
    font-size: calc(5vh + 2px);
    font-weight: bold;
    `
    :
    `
    top: calc(10%);
    font-size: calc(4vw + 10px);
    font-weight: bold;
    `
  }
}

.subtext{
  
  ${isMobile ? 
    `
    top: calc(70%);
    font-size: calc(3vh + 2px);
    `
    :
    `
    top: calc(62%);
    font-size: calc(2vw + 5px);
    `
  } 
}

`;

export const NoMatch = () => {    
    
    
    return(

        <Styles>
          <div className="background">
            <motion.div className="container" >

                <div>
                  <p className="toptext">No page found :(</p>
                  <p className="subtext">Sorry about that</p>
                </div>

            </motion.div>
          </div>
        </Styles>
)}