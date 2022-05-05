import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecreams } from '../redux';
const IcecreameContainer = () => {
    const numberOfIcecreams = useSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Icecreams - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecreams())}>Buy Icecreams</button>
        </div>
    )
}

export default IcecreameContainer