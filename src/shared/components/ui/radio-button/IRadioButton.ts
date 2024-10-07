export interface IRadioButton {
    label: string;
    value: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    valueSelected: number;
  }