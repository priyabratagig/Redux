import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecrames } from '../redux';
const IcecreameContainer = () => {
    const numberOfIcecreams = useSelector(state => state.icecreame.numberOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Icecreams - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecrames())}>Buy Icecreams</button>
        </div>
    )
}

export default IcecreameContainer