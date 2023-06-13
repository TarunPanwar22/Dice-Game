import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'; 
import { Button, OutLineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
    const [selectedNumber , setSelectedNumber] = useState();
    const [ currentDice , setCurrentDice ] = useState(1); 
    const [score , setScore ] = useState(0);
    const [error , setError ] = useState("");
    const [showRules , setShowRules] = useState();
    

    
    const ResetScore = ()=>{
      setScore(0);
    }

  const getGenerateRandomNumber = (min , max )=>{
    return Math.floor(Math.random() * (max - min ) + min );

  }

  const roleDice = () =>{
      if (!selectedNumber) {
         setError("You have not selected any number");
         return 
        }

      const randomNumber = getGenerateRandomNumber(1 , 7 );
      setCurrentDice((prev)=> randomNumber);

    if(selectedNumber === randomNumber ){
        setScore((prev)=>{ return prev + randomNumber})
    }
    else{
        setScore((prev)=>{ return prev - 2});
    }
    setSelectedNumber(undefined);
  }

  const toggle = ()=>{
    setShowRules((prev)=> !prev)
  }

  return (
    <MainContainer>
        <div className='top-section'>
        <TotalScore score ={score} />
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
            <OutLineButton onClick={ResetScore} >Reset</OutLineButton>
            <Button onClick={toggle}> {showRules ? "Hide" : "Show"} Rules</Button>

        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

const MainContainer = styled.div`

display: flex;
flex-direction: column; 
// padding-top: 70px ; 

.top-section {
    display: flex; 
    justify-content: space-between; 
    align-items : end; 
    
}

.btns {
    margin-top: 30px; 
    display: flex;
    flex-direction: column ; 
    align-items: center;
    gap: 10px;
}
`;

export default GamePlay
