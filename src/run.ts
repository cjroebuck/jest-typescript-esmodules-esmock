import oddOrEven, { thinkOfANumber } from "./numberFun";
export const run = () => {
  let num = thinkOfANumber();
  oddOrEven(num % 2 === 0 ? "even" : "odd");
};
