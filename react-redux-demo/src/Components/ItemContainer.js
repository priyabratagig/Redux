import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIcecreams } from '../redux'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Items {props.item} - {props.itemQuantity}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    // adds provided key: value to props
    item: ownProps.hasOwnProperty('cake') ? 'cake' : 'icecreame',
    itemQuantity: ownProps.hasOwnProperty('cake') ? state.cake.numberOfCakes : state.icecream.numberOfIcecreams,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    // adds provided key: value to props
    buyItem: ownProps.hasOwnProperty('cake') ? () => dispatch(buyCake()) : () => dispatch(buyIcecreams()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
// for not subscribing changes to store
// export default connect(null, mapDispatchToProps)(ItemContainer)