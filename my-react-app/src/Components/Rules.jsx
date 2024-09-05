import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2 style={{ fontFamily: 'Poppins, sans-serif' }}>How to Play Dice Game</h2>
        <div className='text' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p>simply dummy text of the printing and typesetting industry.</p>
            <p>simply dummy text of the printing and.</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        </div>
      
    </RulesContainer>
  )
}

export default Rules;


const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: #fbf1f1;
padding: 20px;
border-radius: 10px;
h2{
    font-size: 24px;
}

.text{
    margin-top: 24px;

}

`;
