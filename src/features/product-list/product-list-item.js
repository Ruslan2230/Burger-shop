import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'




export default function ProductListItem (props) {
    return <div className='col-sm-3 col-lg-3 col-md-3 book-list'>
        <h3>{ props.product.name }</h3>
      <div className='thumbnail'>

        <img className='img-thumbnail'
            height={100}
            title={ props.product.name }
            src={`./products/${props.product.image}`}
            alt={ props.product.name }
            />
          <div className='caption'>
        <div>{ props.product.description }</div>
        <div className='pull-right'>{ props.product.price } грн</div>
        <div>
            <AddBtn className='btn btn-primary'
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
        </div>
    </div>
}