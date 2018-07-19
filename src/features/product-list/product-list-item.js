import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'


export default function ProductListItem (props) {
    return <div className='product-list-item'>
        <h3>{ props.product.name }</h3>
        <img
            height={100}
            title={ props.product.name }
            src={`./products/${props.product.image}`}
            alt={ props.product.name }
            />
        <div>{ props.product.description }</div>
        <div>{ props.product.price }грн</div>
        <div>
            <AddBtn
                cartItem={props.cartItem}
                product={props.product}
                addToCart={props.addToCart}
            />

            {
                props.cartItem
                ? <RemoveBtn
                        cartItem={props.cartItem}
                        product={props.product}
                        removeFromCart={props.removeFromCart}
                    />
                    : null
            }


        </div>
    </div>
}