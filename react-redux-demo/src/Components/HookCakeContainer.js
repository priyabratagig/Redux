import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';
const HookCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes); //select the state
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HookCakeContainer