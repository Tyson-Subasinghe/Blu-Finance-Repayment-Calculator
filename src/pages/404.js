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

.title{
        
    position: absolute;
    z-index: 2;
    color: white;
    ${isMobile ? 
      `    
      font-size: calc(8vh);
      top: 0;
      left: calc(39vw);
      `
      :
      `
      font-size: calc(8vw);
      top: 0;
      `
    }
    font-family: Aileron;
    font-weight: bolder;
    justify-content: center;
    align-items: center;
    display: inline-block;
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

                <motion.div className="title">
                    Blu
                </motion.div>
                <div>
                  <p className="toptext">No other pages :(</p>
                  <p className="subtext">This website only contains one page</p>
                </div>

            </motion.div>
          </div>
        </Styles>
)}