import React from 'react'

export default function AddButton(props) {
    return <button
        onClick={ () => props.addToCart(props.product)}
         >Добавити в корзину ({
        (props.cartItem && props.cartItem.quantity) || 0
    }) </button>
}