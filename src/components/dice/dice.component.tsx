import './dice.style.css';

interface diceProps {
  diceType: string;
  incrementDice: React.MouseEventHandler;
  decrementDice: React.MouseEventHandler;
}

export default function Dice(diceProps: diceProps) {
  return (
    <>
    <button onClick={diceProps.decrementDice}>-</button>
    <span>{diceProps.diceType}</span>
    <button onClick={diceProps.incrementDice}>+</button>
    </>)
}