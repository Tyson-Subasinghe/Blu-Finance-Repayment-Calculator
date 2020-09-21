import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import {BrowserView, isMobile, MobileView} from "react-device-detect";

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';

import InputBase from '@material-ui/core/InputBase';

import copy from '../assets/copy.png';
import info from '../assets/info.png';


const Styles = styled.div`

    .background{
        z-index: -3;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, #05f, #09f);
        background-repeat: no-repeat;
        display: flex;
        overflow: hidden;
       
    }

    

    .title{
        
        position: absolute;
        z-index: 2;
        color: white;
        ${isMobile ? 
          `    
          font-size: calc(12vh);
          top: 0;
          
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

    .inputBoxContainer {
        position: absolute;
        display: flex;
        overflow: show;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        ${isMobile ?
          `
          top: calc(18%);
          height: calc(60%);
          width: calc(90%);
          `
          :
          `
          top: calc(18%);
          height: calc(60%);
          width: calc(60%);
          `
        }
    }

    .outputBoxContainer {
        position: absolute;
        display: flex;
        overflow: show;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 25px;
        ${isMobile ?
          `
          top: calc(80%);
          height: calc(12%);
          width: calc(95%);
          border-radius: 25px;
          `
          :
          `
          top: calc(83%);
          height: calc(10%);
          width: calc(80%);
          `
        }
    }

    .sizeText{
        position: absolute;
        z-index: 2;
        font-size: calc(4vh);
        top: 23%;
        left: calc(10vw);
        justify-content: center;
        align-items: center;
        display: inline-block;
    }

    .sizeBox{
        position: absolute;
        z-index: 2;
        font-size: calc(4vh);
        top: 23%;
        left: calc(10vw + 9.1ch);
        justify-content: center;
        align-items: center;
        display: inline-block;
    }

    .size{
        position: absolute;
        z-index: 2;
        font-size: calc(4vw);
        top: 23%;
        left: calc(25vw);
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
            top: 33%;
            left: calc(10vw);
            `
            :
            `
            font-size: calc(4vw);
            top: 33%;
            left: calc(25vw);
            `
        }
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
          top: 43%;
          left: calc(10vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 43%;
          left: calc(25vw);
          `
        }
        justify-content: center;
        align-items: center;
        display: inline-block;
      }

    .repaymentTypeText{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
            `    
            font-size: calc(4vh);
            top: 53% ;
            left: calc(10vw);
            `
            :
            `
            font-size: calc(4vw);
            top: 63%;
            left: calc(25vw);
            `
        }
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
          top: calc(54% + 1em);
          left: calc(10vw);
          `
          :
          `
          font-size: calc(4vw);
          top: 53%;
          left: calc(25vw);
          `
        }
        justify-content: center;
        align-items: center;
        display: inline-block;
    }

    

    .frequencyText{
        position: absolute;
        z-index: 2;
        font-size: calc(4vh);
        top: 63% ;
        left: calc(10vw);
        justify-content: center;
        align-items: center;
        display: inline-block;
    }

    .frequencyBox{
        position: absolute;
        z-index: 2;
        font-size: calc(4vh);
        top: calc(64% + 1em);
        left: calc(10vw);
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
            top: 81%;
            width: 100%;
            margin-left: -49%;
            `
            :
            `
            font-size: calc(4vw);
            top: 83%;
            width: 100%;
            margin-left: -49%;
            `
        }
        font-weight: bold;
        overflow: hidden;
        text-align: center;
        display: inline-block;
    }

      .copyButton{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
            `    
            font-size: calc(2vh);
            top: calc(96.5% - 5vh);
            left: calc(75% - 5vh);
            width: calc(10vh);
            height: calc(10vh);
            `
            :
            `
            font-size: calc(2vw);
            top: calc(88% - 5vh);
            left: calc(93% - 5vh);
            width: calc(10vh);
            height: calc(10vh);
            `
        }
        display: inline-block;
        
        border-radius: 50%;
        position: absolute;
        
        
        justify-content: center;
        align-items: center;
      }

      .infoButton{
        position: absolute;
        z-index: 2;
        ${isMobile ? 
            `    
            font-size: calc(2vh);
            top: calc(98% - 5vh);
            left: calc(25% - 5vh);
            width: calc(8vh);
            height: calc(8vh);
            `
            :
            `
            font-size: calc(2vw);
            top: calc(18% + 2vh);
            left: calc(80% - 11vh);
            width: calc(5vh);
            height: calc(5vh);
            `
        }
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        justify-content: center;
        align-items: center;
      }

      

`;

const possibleFreqs = [
    'weekly',
    'fortnightly',
    'monthly',
    'annually',
];

const possibleRepaymentTypes = [
    'principal and interest',
    'interest only',
];



//Code sourced from https://stackoverflow.com/questions/5294074/pmt-function-in-javascript 
function PMT(rate, nperiod, pv, fv, type) {

    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate === 0) return (pv + fv)/nperiod;

    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type === 1) {
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

    if(repaymentType == "principal and interest"){
        return "Repayments are $" + (PMT(rate/1200,term*12,size)*(12/nPeriods)).toFixed(2);
    }else if(repaymentType == "interest only"){
        return "Repayments are $" + (size*(rate/100)/nPeriods).toFixed(2);
    }else{
        return "Enter a repayment type";
    }
    
}



export const Calculator = () => {
    
    const [size, setSize] = useState(500000);
    const [rate, setRate] = useState(2.29);
    const [term, setTerm] = useState(30);
    const [frequency, setFrequency] = useState("monthly");
    const [repaymentType, setRepaymentType] = useState("principal and interest");
    

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

        if(rate>30){
            setRate(30);
        }
        else if(rate<0){
            setRate(0);
        }else{
            setRate(rate);
        }
        
    };

    

    const sanitiseAndSetTerm = (term) => {

        if(term>30){
            setTerm(30);
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

                <motion.div className="title">
                    Blu
                </motion.div>

                <motion.div className="inputBoxContainer"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5
                }}/>
                <motion.div className="outputBoxContainer"
                initial={{
                    opacity: 0,
                    y: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.6,
                    duration: 0.5
                }}/>
                    
                    <BrowserView>
                        

                        <motion.div className="size"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.1,
                            duration: 0.5
                        }}>
                            For a loan of $
                            <FormControl size="small">
                                <InputBase 
                                    type="number"
                                    id="standard-adornment-size"
                                    value={size}
                                    onChange={e => sanitiseAndSetSize(e.target.value)}
                                    style={{
                                        color:'#ffffff',
                                        fontSize: '4vw',
                                    }}
                                />
                            </FormControl>
                        </motion.div>
                        <motion.div className="rate"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5
                        }}>
                            with a rate of 
                            <FormControl size="small">
                                <InputBase
                                    type="number"
                                    id="standard-adornment-rate"
                                    value={rate}
                                    onChange={e => sanitiseAndSetRate(e.target.value)}
                                    style={{
                                        color:'#ffffff',
                                        fontSize: '4vw',
                                        marginLeft: '0.25em',
                                        width: "3.6ch",
                                    }}
                                    
                                    
                                />
                            </FormControl>
                            % p.a. 
                        </motion.div>
                        <motion.div className="term"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5
                        }}>
                            a loan term of
                            <FormControl size="small">
                                <InputBase 
                                    type="number"
                                    id="standard-adornment-term"
                                    value={term}
                                    onChange={e => sanitiseAndSetTerm(e.target.value)}
                                    style={{
                                        color:'#ffffff',
                                        fontSize: '4vw',
                                        marginLeft: '0.25em',
                                        width: '2.5ch',
                                    }}
                                    

                                />
                            </FormControl>
                            years
                        </motion.div>
                        
                        
                        <motion.div className="repaymentType"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5
                        }}>
                            and 
                            <FormControl size="small">
                                
                                <Select
                                disableUnderline
                                IconComponent = {"none"}
                                value={repaymentType}
                                onChange={e => setRepaymentType(e.target.value)}
                                input={<Input/>}
                                renderValue={(selected) => {
                                    return selected;
                                }}
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{
                                    color:'#ffffff',
                                    fontSize: '4vw',
                                    marginLeft: '0.25em',
                                }}>
                                    <MenuItem disabled value="">
                                        <em>Enter repayment type</em>
                                    </MenuItem>

                                    {possibleRepaymentTypes.map((possibleRepaymentType) => (
                                        <MenuItem key={possibleRepaymentType} value={possibleRepaymentType} >
                                        {possibleRepaymentType}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            
                        </motion.div>

                        <motion.div className="repaymentTypeText"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}>
                            repayments
                        </motion.div>
                        
                        
                        <motion.div className="result"
                        initial={{
                            opacity: 0,
                            y: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5
                        }}>
                            {workOutRepayments(size,rate,term,frequency,repaymentType)}
                            <FormControl size="small">
                                <Select
                                disableUnderline
                                IconComponent = {"none"}
                                value={frequency}
                                onChange={e => setFrequency(e.target.value)}
                                input={<Input/>}
                                renderValue={(selected) => {
                                    return selected;
                                }}
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{
                                    color:'#ffffff',
                                    fontSize: '4vw',
                                    marginLeft: '0.25em',
                                    fontWeight: 'bold',
                                    
                                }}
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
                        <motion.div
                        initial={{
                            opacity: 0,
                          
                        }}
                        animate={{
                            opacity: 1,
                           
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5
                        }}>
                            <IconButton className="copyButton" onClick={() => {navigator.clipboard.writeText(workOutRepayments(size,rate,term,frequency,repaymentType)+" "+frequency)}}>
                                <img src={copy} style={{height:'4vmin', width:'4vmin'}} alt="copy"/>
                            </IconButton>
                        </motion.div>
                        
                        <motion.div
                        initial={{
                            opacity: 0,
                          
                        }}
                        animate={{
                            opacity: 1,
                           
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}>
                            <IconButton className="infoButton" href={"/conditions"}>
                                <img src={info} style={{height:'4vmin', width:'4vmin', marginTop: '0.5vmin'}} alt="info"/>
                            </IconButton>
                        </motion.div>
                        
                    </BrowserView>






















                    <MobileView>

                        <motion.div className="sizeText"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.1,
                            duration: 0.5
                        }}>
                            <span style={{fontWeight: "bold"}}>Loan size:</span> $
                        </motion.div>
                        <motion.div className="sizeBox"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.1,
                            duration: 0.5
                        }}>
                            <FormControl size="small">
                                <InputBase
                                    type="number"
                                    id="standard-adornment-size"
                                    value={size}
                                    onChange={e => sanitiseAndSetSize(e.target.value)}
                                    style={{
                                        color:'#ffffff',
                                        fontSize: '4vh',
                                        top: '-0.05em',
        
                                    }}
                                />
                            </FormControl>
                        </motion.div>
                        <motion.div className="rate"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5
                        }}>
                            <span style={{fontWeight: "bold"}}>Rate: </span>
                            <FormControl size="small">
                                <InputBase
                                
                                    id="standard-adornment-rate"
                                    type="number"
                                    value={rate}
                                    onChange={e => sanitiseAndSetRate(e.target.value)}
                                    style={{
                                        color:'#ffffff',
                                        fontSize: '4vh',
                                        marginLeft: '0.25em',
                                        width: "3.6ch",
                                        top: '-0.1em',
                                    }}
                                    
                                    
                                />
                            </FormControl>
                            % p.a.
                        </motion.div>
                        <motion.div className="term"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5
                        }}>
                            <span style={{fontWeight: "bold"}}>Loan term:</span>
                            <FormControl size="small" >
                                <InputBase 
                                    id="standard-adornment-term"
                                    type="number"
                                    value={term}
                                    onChange={e => sanitiseAndSetTerm(e.target.value)}
                                    style={{
                                        color:'#ffffff',
                                        fontSize: '4vh',
                                        marginLeft: '0.25em',
                                        width: '2.5ch',
                                        top: '-0.1em',
                                    }}
                                    

                                />
                            </FormControl>
                           years
                        </motion.div>
                        
                        <motion.div className="repaymentTypeText" 
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5
                        }}>
                            <span style={{fontWeight: "bold"}}>Repayment type:</span>
                        </motion.div>

                        <motion.div className="repaymentType"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5
                        }}>
                            
                            <FormControl size="small">
                                
                                <Select
                                disableUnderline
                                IconComponent = {"none"}
                                value={repaymentType}
                                onChange={e => setRepaymentType(e.target.value)}
                                input={<Input/>}
                                renderValue={(selected) => {
                                    return selected;
                                }}
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{
                                    color:'#ffffff',
                                    fontSize: '4vh',
                                
                                }}>
                                    <MenuItem disabled value="">
                                        <em>Enter repayment type</em>
                                    </MenuItem>

                                    {possibleRepaymentTypes.map((possibleRepaymentType) => (
                                        <MenuItem key={possibleRepaymentType} value={possibleRepaymentType} >
                                        {possibleRepaymentType}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            
                        </motion.div>

                        <motion.div className="frequencyText" 
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}>
                            <span style={{fontWeight: "bold"}}>Frequency:</span>
                        </motion.div>
                        
                        <motion.div className="frequencyBox"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}>
                            <FormControl size="small">
                                <Select
                                disableUnderline
                                IconComponent = {"none"}
                                value={frequency}
                                onChange={e => setFrequency(e.target.value)}
                                input={<Input/>}
                                renderValue={(selected) => {
                                    return selected;
                                }}
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{
                                    color:'#ffffff',
                                    fontSize: '4vh',
                                   
                                    
                                }}
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
                        
                        <motion.div className="result"
                        initial={{
                            opacity: 0,
                            y: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5
                        }}>
                            {workOutRepayments(size,rate,term,frequency,repaymentType)}{" "}{frequency}
                            
                        </motion.div>

                        

                        <motion.div
                        initial={{
                            opacity: 0,
                          
                        }}
                        animate={{
                            opacity: 1,
                           
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5
                        }}>
                            <IconButton className="copyButton" onClick={() => {navigator.clipboard.writeText(workOutRepayments(size,rate,term,frequency,repaymentType)+" "+frequency)}}>
                                <img src={copy} style={{height:'4vh', width:'4vh'}} alt="copy"/>
                            </IconButton>
                            <IconButton className="infoButton" href={"/conditions"}>
                                <img src={info} style={{height:'4vh', width:'4vh'}} alt="info"/>
                            </IconButton>
                        </motion.div>

                    </MobileView>
                
            </motion.div>
           
        </Styles>
  
)}