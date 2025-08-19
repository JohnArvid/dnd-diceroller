import { diceObj } from "../interfaces/interfaces";
import rollDice from "./rolldice";

export default function rollAllDices(arrayOfDiceObj, modifier):number {
      let result = arrayOfDiceObj.dice.reduce((sum:number, current:diceObj) => {
        let currentResult = 0;
        for(let i = 0; i < current.qnt; i++) {
          currentResult += rollDice(current.diceType);
        }
        return sum + currentResult;
      }, modifier)
      return result;
    }
