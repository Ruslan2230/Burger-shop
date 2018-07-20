import React from 'react'



export default function CreatCartItem (props) {
    return (

        <table>

        <thead>
        <tr>

            <th>Ціна</th>

        </tr>
        </thead>
<div>
        <div>{ props.product.price } грн</div>
            <input type="checkbox"/>
</div>
        <img className='img-thumbnail'
             height={100}
             title={ props.product.name }
             src={`./products/${props.product.image}`}
             alt={ props.product.name }
        />












    </table>)
}





