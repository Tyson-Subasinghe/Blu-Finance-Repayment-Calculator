import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import { motion, useMotionValue } from "framer-motion";
import {isMobile} from "react-device-detect";

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const Styles = styled.div`

    .background{
        z-index: -3;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, #1784d7 0%, #2094ef 100%);
        background-repeat: no-repeat;
        display: flex;
    }

    .size{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
          `    
          font-size: calc(4vh);
          left: calc(25vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 10%;
          left: calc(35vw);
          `
        }
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

      .rate{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
          `    
          font-size: calc(4vh);
          left: calc(25vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 20%;
          left: calc(35vw);
          `
        }
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

      .term{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
          `    
          font-size: calc(4vh);
          left: calc(25vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 30%;
          left: calc(35vw);
          `
        }
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

      .frequency{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
          `    
          font-size: calc(4vh);
          left: calc(25vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 40%;
          left: calc(35vw);
          `
        }
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

      .repaymentType{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
          `    
          font-size: calc(4vh);
          left: calc(25vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 50%;
          left: calc(35vw);
          `
        }
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

      .result{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
          `    
          font-size: calc(4vh);
          left: calc(25vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 70%;
          left: calc(15vw);
          `
        }
        font-weight: bold;
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

`;

//Code sourced from https://stackoverflow.com/questions/5294074/pmt-function-in-javascript 
function PMT(rate, nperiod, pv, fv, type) {

    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return (pv + fv)/nperiod;

    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };

    return -pmt;
}
//End of sourced code

function workOutRepayments(size,rate,term,frequency,repaymentType){

    
    var nPeriods ; //nPeriods is the number of periods based on frequency, default is 12

    if(frequency==="annually"){
        nPeriods = 1;
    } 
    else if(frequency==="monthly"){
        nPeriods = 12;
    }else if(frequency==="fortnightly"){
        nPeriods = 26;
    }else if(frequency==="weekly"){
        nPeriods = 52;
    }else {
        return "Enter a frequency";
    }

    if(term==0){
        return "Enter a loan term";
    }

    if(repaymentType == "PI"){
        return "Your repayments are $" + (PMT(rate/1200,term*12,size)*(12/nPeriods)).toFixed(2) + " " + frequency;
    }else if(repaymentType == "IO"){
        return "Your repayments are $" + (size*(rate/100)/nPeriods).toFixed(2) + " " + frequency;
    }else{
        return "Enter a repayment type";
    }
    
}


const possibleFreqs = [
    'weekly',
    'fortnightly',
    'monthly',
    'annually',
];


export const Calculator = () => {
    
    const [size, setSize] = useState(500000);
    const [rate, setRate] = useState(2.29);
    const [term, setTerm] = useState(30);
    const [frequency, setFrequency] = useState("monthly");
    const [repaymentType, setRepaymentType] = useState("PI");

    const sanitiseAndSetSize = (size) => {

        if(size>10000000){
            setSize(10000000);
        }
        else if(size<0){
            setSize(0);
        }else{
            setSize(size);
        }
        
    };

    const sanitiseAndSetRate = (rate) => {

        if(rate>100){
            setRate(100);
        }
        else if(rate<0){
            setRate(0);
        }else{
            setRate(rate);
        }
        
    };

    

    const sanitiseAndSetTerm = (term) => {

        if(term>40){
            setTerm(40);
        }
        else if(term<0){
            setTerm(0);
        }else{
            setTerm(term);
        }
        
    };

    
    

    return(

        <Styles>
            <motion.div className="background"  >

                
                
                
                <motion.div className="size">
                    <label>
                        Size: $
                        <input type="number" 
                        min="0"
                        value={size}
                        onChange={e => sanitiseAndSetSize(e.target.value)}
                        />
                    </label>
                </motion.div>
                <motion.div className="rate">
                <label>
                    Rate:
                    <input type="number" 
                    min="0"
                    value={rate}
                    onChange={e => sanitiseAndSetRate(e.target.value)}
                    />
                    % p.a.
                </label>
                </motion.div>
                <motion.div className="term">
                <label>
                    Loan Term:
                    <input type="number" 
                    value={term}
                    onChange={e => sanitiseAndSetTerm(e.target.value)}
                    />
                    Years
                </label>
                </motion.div>
                <motion.div className="frequency">
                    <FormControl >
                        <Select
                        value={frequency}
                        onChange={e => setFrequency(e.target.value)}
                        input={<Input/>}
                        renderValue={(selected) => {
                            return selected;
                        }}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Enter frequency</em>
                            </MenuItem>

                            {possibleFreqs.map((possibleFreq) => (
                                <MenuItem key={possibleFreq} value={possibleFreq} >
                                {possibleFreq}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </motion.div>
                <motion.div className="repaymentType">
                <label>
                    Repayment Type: 
                    <input type="text" 
                    value={repaymentType}
                    onChange={e => setRepaymentType(e.target.value)}
                    />
                    
                </label>
                </motion.div>
                
                <motion.div className="result">
                    {workOutRepayments(size,rate,term,frequency,repaymentType)}.
                </motion.div>

            </motion.div>
           
        </Styles>
  
)}