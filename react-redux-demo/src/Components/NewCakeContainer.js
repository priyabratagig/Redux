import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

const NewCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes); //select the state
    const [buyCakeNumber, setBuyCakeNumber] = useState(1);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <input type="number" name="buy-cake" id="buy-cake" value={buyCakeNumber} onChange={e => setBuyCakeNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(buyCakeNumber))}>Buy {buyCakeNumber} Cake</button>
        </div>
    );
}

export default NewCakeContainer