export type DiceType = 'd20' | 'd12' | 'd10' | 'd8' | 'd6'| 'd4' | undefined;
// Shióuld be a literal type of all possible dicetypes as strings
// e.g  and so on

export interface diceObj{
  qnt: number, 
  diceType: DiceType 
}

export interface RollProps {
  rollId: number,
  rollName: string,
  dice: diceObj[],
  modifier: number,
  rollMethod: () => number;
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
  rollInfo: RollProps;
}

export interface RollPickerProps {
  pickedRoll: RollProps;
  setPickedRoll: Function;
  rolls: RollProps[];
}

export interface PickerMenuProps {
  pickedRoll: RollProps;
  setPickedRoll:Function;
  setResult: Function;
}
