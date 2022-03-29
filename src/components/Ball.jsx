import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBall } from "../redux/ballActions";
const Ball = ({ balls, buyBall, sellBall }) => {
  const [qty, setQty] = useState(10);
  return (
    <div>
      <h1>Balls: {balls}</h1>
      <input type="number" value={qty} onChange={e => setQty(e.target.value)} />
      <button onClick={() => buyBall(qty)}>buy</button>
      <button onClick={sellBall}>sell</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    balls: state.ball.balls,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyBall: qty => dispatch(buyBall(qty)),
    sellBall: () =>
      dispatch({
        type: "SELL_BALL",
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ball);
