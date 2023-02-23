type SumParams = {
  num1: number;
  num2: number;
};

export const sum = ({ num1, num2 }: SumParams): number => num1 + num2;
