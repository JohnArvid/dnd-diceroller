import React from 'react';
import './dice.styles.css';
import { DiceProps } from '../../interfaces/interfaces';

const Dice: React.FC<DiceProps> = ({
  diceType,
  incrementDice,
  decrementDice,
}) => {
  return (
    <>
      <button onClick={decrementDice}>-</button>
      <span>{diceType}</span>
      <button onClick={incrementDice}>+</button>
    </>
  );
};

export default Dice;
