import { RollProps } from "../interfaces/interfaces";
import rollDice from "./rolldice";

// rollMethods behöver uppdateras, Advantage och disadvantage returnerar Infinity och -Infinity


export const presetRolls: RollProps[] = [
  {
    rollId: 0,
    rollName: 'Standard',
    dice: [{ qnt: 1, diceType: 'd20' }],
    modifier: 0,
    rollMethod() {
      return rollDice(this.dice[0].diceType)
    }
  },
  {
    rollId: 1,
    rollName: 'Advantage',
    dice: [{ qnt: 2, diceType: 'd20' }],
    modifier: 0,
    rollMethod() {
      let rolls = [];
      for (let i = 0; i < this.dice[0].qnt; i++){
        rolls.push(rollDice(this.dice[0].diceType))
      }
      return Math.max(...rolls)
    }
  },
  {
    rollId: 2,
    rollName: 'Disdvantage',
    dice: [{ qnt: 2, diceType: 'd20' }],
    modifier: 0,
    rollMethod() {
      let rolls = [];
      for (let i=0; i < this.dice[0].qnt; i++){
        rolls.push(rollDice(this.dice[0].diceType))
      }
      return Math.min(...rolls)
    }
  },
  { rollId: 3,
    rollName: 'Emphasis',
    dice: [{qnt: 2, diceType: 'd20'}],
    modifier: 0,
    rollMethod() {
      let rolls = [];
      for (let i=0; i < this.dice[0].qnt; i++){
        rolls.push(rollDice(this.dice[0].diceType))
      }
      console.log(rolls)
      if (20 - Math.max(...rolls) < Math.min(...rolls) - 1) {
          return Math.max(...rolls)
        } else {
          return Math.min(...rolls)
        } ;
      }
  }
];
