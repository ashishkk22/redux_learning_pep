import React, { useState } from "react";
import { connect } from "react-redux";
const Bats = props => {
  console.log(props.bats);
  //   const [bat, setBat] = useState(20);
  //local to the component
  return (
    <div>
      <h1>bats : {props.bats}</h1>
      {/* <button
        onClick={() => {
          setBat(bat - 1);
        }}
      >
        Buy bat{" "}
      </button> */}
      <button onClick={props.buyBat}>But Bat</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bats: state.bat.bats,
  };
  //aa global mathi state lai le ane pachi aa component ma props ni jem pass kari de
};

const mapDispatchToProps = dispatch => {
  return {
    buyBat: () => dispatch({ type: "BUY_BAT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bats);
