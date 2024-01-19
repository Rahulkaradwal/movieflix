function Box({ isBoxOpen, SetBoxOpen, children }) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => SetBoxOpen((s) => !isBoxOpen)}
      >
        {isBoxOpen ? "-" : "+"}
      </button>
      {isBoxOpen && children}
    </div>
  );
}

export default Box;
