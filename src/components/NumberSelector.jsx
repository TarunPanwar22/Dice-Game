import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({setError, error, selectedNumber , setSelectedNumber}) => {
    const array = [ 1 , 2 , 3 , 4 , 5 , 6 ]; 

    const numberSelectHandler = (value)=>{
        setSelectedNumber(value);
        setError("");
    }


  return (
    <NumberSelected>
        <p className='error'>{error}</p>
    <div className='flex'>
        {array.map((value, index)=>(
            <Box isSelected={value ===selectedNumber} key={index} onClick={()=>{numberSelectHandler(value)}}>{value}</Box>
        ))}
    </div>
    <p>Selected Number</p>
    </NumberSelected>
  )
}


const NumberSelected = styled.div`

display: flex; 
flex-direction : column ; 
align-items: end; 

.flex{
    display: flex; 
    gap: 24px ; 
}

p{
    font-size: 24px ; 
    font-weight: 700px ; 
    display: flex; 
    
}

.p{
    color: red ;
}
`;

const Box = styled.div`

height: 72px;
width: 72px; 
text-align: center; 
border: 1px solid black; 
display: grid; 
place-items: center; 
font-size: 24px; 
font-weight: 700px ; 
cursor: pointer;
background-color: ${(props=> props.isSelected ? "black" : "white" )};
color: ${(props=>{ return props.isSelected ? "white" : "black"})}


`

export default NumberSelector
