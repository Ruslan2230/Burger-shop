import React from 'react'
import CreatCartItem from './ingr-list'
import { connect } from 'react-redux'



function CreatCart (props) {
    return <div className='product-list'>
        {
            props.products.map( product =>
                <CreatCartItem
                    product={product}
                    addToCart={props.addToCart }
                    removeFromCart={props.removeFromCart }
                    cartItem={props.cart.filter( cartItem => cartItem.id === product.id)[0]}
                />)
        }
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatCart)



