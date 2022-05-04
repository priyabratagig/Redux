import React from "react";
import { buyCake } from "../redux";
import { connect } from 'react-redux' //higer-order-component

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};
const mapStateToProps = state => ({
  // adds provided key: value to props
  numberOfCakes: state.numberOfCakes,
})
const mapDispatchToProps = dispatch => ({
  // adds provided key: value to props
  buyCake: () => dispatch(buyCake()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
