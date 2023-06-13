import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
const StartPlay = ({toggle}) => {
  return (
    <Container>
      <div className="images">
            <img src="/images/dices.png" alt="" />
        </div>
      <div className="content">
        <h1>Dice Game </h1>
        <Button onClick={toggle}>Play Now </Button>
      </div>
    </Container>
  )
}

const Container = styled.div`

max-width: 1180px; 
margin: 0 auto; 
height: 100vh; 
display: flex; 
align-items: center;

.content {
    display: flex; 
    flex-direction: column ; 
    align-items: end; 
    h1{
        font-size: 96px; 
        white-space: nowrap;

    }
    display: flex; 
    align-items: end; 
    position: relative;
}

`;



export default StartPlay
