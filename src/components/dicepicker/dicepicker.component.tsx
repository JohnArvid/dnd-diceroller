import React from 'react';
import './dicepicker.styles.css';

import Dice from '../dice/dice.component'

interface DicePickerProps {

}

const DicePicker: React.FC<DicePickerProps> = ({
//props
}) => {
  return (
    <>
     <Dice 
      diceType='d20'
      incrementDice={(e)=>(console.log(e.target, ' incremented'))}
      decrementDice={(e)=>(console.log(e.target, ' decremented'))}
     />
     <Dice 
      diceType='d12'
      incrementDice={(e)=>(console.log(e.target, ' incremented'))}
      decrementDice={(e)=>(console.log(e.target, ' decremented'))}
     />
    </>
  );
};

export default DicePicker;
