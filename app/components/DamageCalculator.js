'use client'
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const btnValues = [
  ["C", "", "⬅️"],
  [10, 11, 12],
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
]

class Calculation {
  constructor(result = 0, previous=0) {
    this.result = result;
    this.previous = previous;
  }

  reset() {
    return new Calculation();
  }

  add(number) {
    return new Calculation(
      this.result + Number(number), 
      this
    );
  }

  undo() {
    if (this.previous === 0)
      return this
    return this.previous;
  }

}

function DamageCalculator() {
  let [calc, setCalc] = useState(new Calculation());

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc(calc.add(value));
  };

  const undoClickHandler = (e) => {
    e.preventDefault();
    setCalc(calc.undo());
  }

  const resetClickHandler = (e) => {
    setCalc(calc.reset());
  };


  return (
    <Wrapper>
      <Screen value={calc.result} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                className=""
                value={btn}
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "⬅️"
                    ? undoClickHandler
                    : numClickHandler
                }
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
}

export default DamageCalculator;
