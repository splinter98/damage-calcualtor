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

class Inputs {
  values: number[]

  constructor(values: number[] = []) {
    this.values = values;
  }

  reset() {
    return new Inputs();
  }

  add(value: number) {
    return new Inputs([...this.values, Number(value)])
  }

  subtract(value: number) {
    return new Inputs([...this.values, -value]);
  }

  undo() {
    if(this.values.length == 0) {
      return this;
    }

    return new Inputs(this.values.slice(0, -1))
  }

  calculate() {
    if (this.values.length == 0) {
      return 0;
    }
    return this.values.reduce((a,b) => {return a + b;}, 0);
  }

  history() {
    if (this.values.length == 0) {
      return "No Values Entered";
    }
    return this.values.join(", ")
  }
}


function DamageCalculator() {
  let [calc, setCalc] = useState(new Inputs());

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
      <Screen value={calc.calculate()} />
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
