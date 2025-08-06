import { DiceType } from "../interfaces/interfaces";

export default function rollDice(dice:DiceType) {
  let max = +dice.slice(1);
  return (Math.floor(Math.random() * max))
}

/**
 * Är detta en bra allround-funktion för att slå tärning?
 * Funar den lätt att applicera på hur Roll-interfacet ser ut?
 */

