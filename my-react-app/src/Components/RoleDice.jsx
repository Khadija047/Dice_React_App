import styled from 'styled-components';

const RoleDice = ({ currentDice, rollDice }) => { // Fixed prop name: setcurrentDice -> setCurrentDice



    return (
        <DiceContainer>
            <div className='dice' onClick={rollDice}> {/* Updated function name */}
                <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} /> {/* Corrected alt attribute */}
            </div>
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>Click on Dice to Roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p {
        font-size: 24px;
        margin-top: 0px;
    }

    .dice {
        cursor: pointer;
    }
`;
