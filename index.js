const element = (
  // Write your code here.
  <div className="main-container">
    <h1 className="main-head">Congratulations</h1>
    <div className="card_container">
      <img
        className="img-edit"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      ></img>
      <h1 className="head">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer and Technology.
        <br />
        Bhimavaram
      </p>
      <img
        className="img-edit"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
