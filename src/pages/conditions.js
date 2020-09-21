import React from 'react';
import { motion } from "framer-motion";
import {isMobile, BrowserView, MobileView} from "react-device-detect";
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

export const Conditions = () => {    
    
    
    return(

        <Styles>
          <div className="background">
            <motion.div className="container" >                
                
                  <BrowserView>
                    <p className="toptext" style={{ position: 'absolute', marginTop: '10%', marginLeft: '-3ch',}}>Disclaimer</p>
                    <p className="subtext" style={{ position: 'absolute', width: '80%', marginLeft: '-38%', marginTop: '-10%', fontSize: '2vw'}}>
                    <span style={{color:'white'}}>A few things to keep in mind.</span> This calculator is only a guide. To get the right home loan advice speak to a broker. They’ll be able to help you find the right loan in amongst thousands across the market.
                    By using this mortgage calculator application you accept the terms and conditions. Applications made through your bank or broker are subject to approval and this calculation does not represent a loan approval. Conditions, fees and charges will apply.
                    The information provided by this home loan repayment calculator should be treated as a guide only, and not be relied on as true indication of your home loan repayments, or a quote or indication of pre-qualification for any home loan product.
                    The calculator default rate is based on an owner occupier loan with a loan to valuation ratio of less than or equal to 80% and borrowings of $500,000.
                    </p>
                  </BrowserView>
                  
                  <MobileView>
                    <h1  style={{ position: 'absolute', marginTop: '-80%', marginLeft: '-30%',}}>Disclaimer</h1>
                    <p  style={{ position: 'absolute', width: '80%', marginTop: '-45%', marginLeft: '-38%', fontSize: '2vh', justifyContent: 'center'}} >
                    <span style={{color:'white'}}>A few things to keep in mind.</span> This calculator is only a guide. To get the right home loan advice speak to a broker. They’ll be able to help you find the right loan in amongst thousands across the market.
                    By using this mortgage calculator application you accept the terms and conditions. Applications made through your bank or broker are subject to approval and this calculation does not represent a loan approval. Conditions, fees and charges will apply.
                    The information provided by this home loan repayment calculator should be treated as a guide only, and not be relied on as true indication of your home loan repayments, or a quote or indication of pre-qualification for any home loan product.
                    The calculator default rate is based on an owner occupier loan with a loan to valuation ratio of less than or equal to 80% and borrowings of $500,000.
                    </p>
                  </MobileView>
      
            </motion.div>
          </div>
        </Styles>
)}