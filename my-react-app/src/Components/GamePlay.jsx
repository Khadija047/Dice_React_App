import React, { useState } from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { Button,OutlineButton } from '../assets/styled/Button';
import Rules from './Rules';


const GamePlay = () => {

    const [selectNumber, setSelectNumber] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] =  useState(false);
    
    
    
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };




    const rollDice = () => {
        if(!selectNumber) {
            setError('You have not selected any Number');
            return;
         }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

        if(selectNumber ===randomNumber){
            setScore((prev)=>prev+randomNumber);
        } else{
            setScore((prev)=>prev-2);
        }
        setSelectNumber(undefined);
        

        
    };

    const  resetScore =()=>{
        setScore(0);
    }

    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score ={score} />
                <NumberSelector 
                    selectNumber={selectNumber}
                    setSelectNumber={setSelectNumber}
                    error = {error}
                    setError = {setError}
                />
            </div>
            <RoleDice 
                currentDice={currentDice}
                rollDice={rollDice} // Fixed prop name: setcurrentDice -> setCurrentDice
            />
            <div className='btns'>
                <OutlineButton
                onClick={resetScore}
                >Reset Score</OutlineButton>
            <Button
    onClick={() => setShowRules(prev => !prev)} // Corrected this line
>
    {showRules ? "Hide" : "Show"} Rules
</Button>

            </div>
         {showRules  && <Rules/>}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    padding-top: 20px;

    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }
    .btns{
        gap: 10px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
