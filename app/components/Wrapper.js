const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
      <style jsx>{`
        div {
          width: 340px;
          height: 540px;
          padding: 10px;
          border-radius: 10px;
          background-color: #485461;
          background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
        }
      `}</style>
    </div>)
};

export default Wrapper;