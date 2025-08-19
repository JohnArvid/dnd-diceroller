import { DiceType } from "../interfaces/interfaces";

export default function rollDice(dice:DiceType):number {
  let max = +dice.slice(1);
  return (Math.ceil(Math.random() * max))
}

/**
 * Är detta en bra allround-funktion för att slå tärning?
 * Funkar den lätt att applicera på hur Roll-interfacet ser ut?
 */

