const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
      <style jsx>{`
        button {
          border: none;
          background-color: rgb(80, 60, 209);
          font-size: 24px;
          color: rgb(255, 255, 255);
          font-weight: bold;
          cursor: pointer;
          border-radius: 10px;
          outline: none;
        }

        button:hover {
          background-color: rgb(61, 43, 184);
        }

        .equals {
          grid-column: 3 /5;
          background-color: rgb(243, 61, 29);
        }  
      `}</style>
    </button>
  );
};

export default Button;