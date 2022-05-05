import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const ItemContainer = (props) => {
    return (
        <h2>Items {props.item} - {props.itemQuantity}</h2>
    )
}
const mapStateToProps = (state, ownProps) => ({
    // adds provided key: value to props
    item: ownProps.hasOwnProperty('cake') ? 'cake' : 'icecreame',
    itemQuantity: ownProps.hasOwnProperty('cake') ? state.cake.numberOfCakes : state.icecream.numberOfIcecreams,
})
const mapDispatchToProps = dispatch => ({
    // adds provided key: value to props
    buyCake: () => dispatch(buyCake()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)