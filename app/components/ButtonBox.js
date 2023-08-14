// import './ButtonBox.css'

const ButtonBox = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
            width: 100%;
            height: calc(100% - 140px);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-gap: 10px;
        }
      `}</style>
    </div>);
};

export default ButtonBox;