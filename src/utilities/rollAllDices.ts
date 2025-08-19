import { diceObj } from "../interfaces/interfaces";
import rollDice from "./rolldice";

export default function rollAllDices(arrayOfDiceObj:diceObj[], modifier:number):number {
      let result = arrayOfDiceObj.reduce((sum:number, current:diceObj) => {
        let currentResult = 0;
        for(let i = 0; i < current.qnt; i++) {
          currentResult += rollDice(current.diceType);
        }
        return sum + currentResult;
      }, modifier)
      return result;
    }
