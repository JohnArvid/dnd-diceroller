export interface DiceType {
// Shióuld be a union type of all possible dicetypes as strings
// e.g 'd20' | 'd12' | 'd8' | and so on
}

export interface Roll {
  rollId: number,
  rollName: string,
  dice: [{ qnt: number, diceType: DiceType }],
  modifier: number,
}

export interface ButtonProps {
  action: React.MouseEventHandler;
  text: string;
}

export interface DiceProps {
  diceType: string;
  incrementDice: React.MouseEventHandler;
  decrementDice: React.MouseEventHandler;
}

export interface DicerollerProps {}

export interface ResultsProps {
  result: string;
  rollInfo: string;
}

export interface RollProps {
  rollName: string;
}