import React from 'react';
import './dice.styles.css';
import { DiceProps } from '../../interfaces/interfaces';

const Dice: React.FC<DiceProps> = ({
  diceType,
  incrementDice,
  decrementDice,
}) => {
  return (
    <div className='dice' data-diceType={diceType}>
      <button onClick={decrementDice}>-</button>
      <span>{diceType}</span>
      <button onClick={incrementDice}>+</button>
    </div>
  );
};

export default Dice;
