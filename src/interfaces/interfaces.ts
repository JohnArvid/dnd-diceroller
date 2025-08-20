export type DiceType = 'd20' | 'd12' | 'd10' | 'd8' | 'd6'| 'd4' | undefined;
// undefined borde tas bort och så borde jag säkerställa i komponenten att inputen inte får vara
// undefined innan värdet används

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
