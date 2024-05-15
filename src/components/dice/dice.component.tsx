import './dice.style.css';

export default function Dice({diceType, incrementDice, decrementDice}) {
  return (
    <>
    <button onClick={decrementDice}>-</button>
    <span>{diceType}</span>
    <button onClick={incrementDice}>+</button>
    </>)
}