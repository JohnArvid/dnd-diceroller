import React from 'react';
import './dice.styles.css';

interface DiceProps {
  diceType: string;
  incrementDice: React.MouseEventHandler;
  decrementDice: React.MouseEventHandler;
}

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
