import { DiceType, RollProps } from "../interfaces/interfaces";
import rollAllDices from "./rollAllDices";


export default class QuickRoll implements RollProps {
  rollId: number;
  rollName: string;
  dice: { qnt: number; diceType: DiceType }[];
  modifier: number;
  rollMethod: () => number;

  constructor(diceType: DiceType) {
    this.rollId = 100;
    this.rollName = "Quick roll";
    this.dice = [{ qnt: 1, diceType }];
    this.modifier = 0;
    this.rollMethod = () => rollAllDices(this.dice, this.modifier);
  }
}