'use client'
import Textfit from "@namhong2001/react-textfit"
import css from 'styled-jsx/css'
// import './Screen.css'

const { className, styles } = css.resolve`
  div {
      height: 100px;
      width: 100%;
      margin-bottom: 10px;
      padding: 0 10px;
      background-color: #4357692d;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: white;
      font-weight: bold;
      box-sizing: border-box;
  }
`


const Screen = ({ value }) => {
  return (
    <Textfit className={className} mode="single" max={70}>
      {value}
      {styles}
    </Textfit>
  );
};

export default Screen